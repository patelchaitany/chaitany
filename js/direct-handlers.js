// Direct handlers for project and skill items
document.addEventListener('DOMContentLoaded', function() {
  console.log('Direct handlers script loaded');
  
  // Add a small delay to ensure tui.js is fully initialized
  setTimeout(() => {
    // Setup project item handlers
    setupItemHandlers('projects');
    
    // Setup skill item handlers
    setupItemHandlers('skills');
    
    console.log('Direct handlers initialized - projects and skills handlers are ready');
    
    // Ensure keyboard focus is on document
    document.body.focus();
  }, 500);
});

function setupItemHandlers(sectionType) {
  try {
    console.log(`Setting up ${sectionType} handlers`);
    
    // Get the section container
    const sectionContainer = document.getElementById(sectionType);
    if (!sectionContainer) {
      console.error(`Section container for ${sectionType} not found`);
      return;
    }
    
    // Get the list of items
    const itemsList = sectionContainer.querySelector('.ui-list');
    if (!itemsList) {
      console.error(`Items list for ${sectionType} not found`);
      return;
    }
    
    // Get all items
    const items = itemsList.children;
    console.log(`Found ${items.length} ${sectionType} items`);
    
    // Add click handler to each item
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      
      item.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        console.log(`Clicked on ${sectionType} item: ${item.textContent}`);
        
        // Load the content for this item
        loadItemContent(sectionType, i, item.textContent);
      });
      
      // Make the item look clickable
      item.style.cursor = 'pointer';
      
      console.log(`Added handler to ${sectionType} item: ${item.textContent}`);
    }
  } catch (error) {
    console.error(`Error setting up ${sectionType} handlers:`, error);
  }
}

async function loadItemContent(sectionType, index, itemName) {
  try {
    console.log(`Loading content for ${sectionType} item ${index}: ${itemName}`);
    
    // Get the main content section
    const mainContent = document.getElementById('main-content')
      ?.getElementsByClassName('container-content')[0];
    
    if (!mainContent) {
      console.error('Main content section not found');
      return;
    }
    
    // Clear the main content
    mainContent.innerHTML = '';
    
    // Show loading indicator
    const loadingElement = document.createElement('div');
    loadingElement.innerHTML = '<p>Loading content...</p>';
    mainContent.appendChild(loadingElement);
    
    // Fetch the data with absolute path to ensure it works regardless of route
    const response = await fetch(`/data/${sectionType}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${sectionType}.json: ${response.status}`);
    }
    
    const { data } = await response.json();
    if (!data || !data[index]) {
      throw new Error(`No data found for ${sectionType} item ${index}`);
    }
    
    // Clear the loading indicator
    mainContent.innerHTML = '';
    
    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('outer-paragraph-container');
    
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('inner-paragraph-container', 'mt-4');
    
    // Get the item data
    const itemData = data[index];
    
    // Create the header section
    const headerElement = document.createElement('div');
    
    // Add title if available
    if (itemData.name) {
      const titleElement = document.createElement('h1');
      titleElement.innerHTML = `<span class="text-blue">${itemData.name}</span>`;
      headerElement.appendChild(titleElement);
    }
    
    // Add year if available
    if (itemData.year) {
      const yearElement = document.createElement('h2');
      yearElement.innerHTML = `[Built in <span class="text-orange">${itemData.year}</span>]`;
      headerElement.appendChild(yearElement);
    }
    
    // Add technologies if available
    if (itemData.technologies && itemData.technologies.length > 0) {
      const techContainer = document.createElement('div');
      techContainer.classList.add('technologies-row');
      
      const techHtml = itemData.technologies.map(tech => {
        return tech.replace(/{{(.*?)}}/, '<span class="text-pink">$1</span>');
      }).join(' ');
      
      techContainer.innerHTML = techHtml;
      headerElement.appendChild(techContainer);
    }
    
    // Add buttons for GitHub and demo if available
    if (itemData.githubUrl || itemData.demoUrl) {
      const buttonsContainer = document.createElement('div');
      buttonsContainer.classList.add('buttons-container');
      
      if (itemData.githubUrl) {
        const githubButton = document.createElement('a');
        githubButton.classList.add('project-button');
        githubButton.href = itemData.githubUrl;
        githubButton.target = '_blank';
        githubButton.textContent = 'GitHub';
        buttonsContainer.appendChild(githubButton);
      }
      
      if (itemData.demoUrl) {
        const demoButton = document.createElement('a');
        demoButton.classList.add('project-button');
        demoButton.href = itemData.demoUrl;
        demoButton.target = '_blank';
        demoButton.textContent = 'Demo';
        buttonsContainer.appendChild(demoButton);
      }
      
      headerElement.appendChild(buttonsContainer);
    }
    
    // Add the header to the inner container
    innerContainer.appendChild(headerElement);
    
    // Add content paragraphs
    if (itemData.content && itemData.content.length > 0) {
      itemData.content.forEach(paragraph => {
        const paragraphElement = document.createElement('div');
        paragraphElement.innerHTML = paragraph.replace(/{{(.*?)}}/g, '<span class="text-pink">$1</span>');
        innerContainer.appendChild(paragraphElement);
      });
    }
    
    // Add code snippet if available
    if (itemData.snippet) {
      const getCodeSnippet = async (snippet) => {
        try {
          const response = await fetch(`/data/snippets/snippet.${snippet}`);
    
          if (!response.ok) {
            console.warn(`Snippet file not found: /data/snippets/snippet.${snippet}`);
            return `// Code snippet for ${snippet} not available\n// This is a placeholder for demonstration purposes`;
          }
    
          const text = await response.text();
          return text;
        } catch (error) {
          console.error("Error fetching code snippet:", error);
          return "// Error loading code snippet";
        }
      };
      
      // Create container for snippet
      const snippetContainerElement = document.createElement("div");
      snippetContainerElement.classList.add("snippet-container");
      
      // Create pre and code elements
      const snippetElement = document.createElement("pre");
      const codeElement = document.createElement("code");
      codeElement.classList.add(itemData.snippet);
      
      // Add snippet content
      const snippetContent = await getCodeSnippet(itemData.snippet);
      codeElement.innerText = snippetContent;
      
      // Add elements to DOM
      snippetElement.appendChild(codeElement);
      snippetContainerElement.appendChild(snippetElement);
      innerContainer.appendChild(snippetContainerElement);
      
      // Function to apply syntax highlighting
      const colorizeCode = () => {
        if (typeof hljs !== 'undefined') {
          document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
          });
        } else {
          console.warn('Highlight.js not loaded, skipping syntax highlighting');
        }
      };
      
      // Apply syntax highlighting to the code
      setTimeout(colorizeCode, 100);
    }
    
    // Add the inner container to the outer container
    contentContainer.appendChild(innerContainer);
    
    // Add the content to the main content section
    mainContent.appendChild(contentContainer);
    
    console.log(`Content loaded for ${sectionType} item ${index}`);
  } catch (error) {
    console.error(`Error loading content for ${sectionType} item ${index}:`, error);
    
    // Get the main content section
    const mainContent = document.getElementById('main-content')
      ?.getElementsByClassName('container-content')[0];
    
    if (mainContent) {
      // Show error message
      mainContent.innerHTML = `<div class="error-message"><p>Error loading content: ${error.message}</p></div>`;
    }
  }
}
