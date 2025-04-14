/**
 * Dynamic Search/Filtering Script
 */
document.addEventListener('DOMContentLoaded', () => {
    // --- Search for Books on index.html ---
    const searchBox = document.getElementById('searchBox');
    const bookListItems = document.querySelectorAll('.book-list li');

    if (searchBox && bookListItems.length > 0) {
        searchBox.addEventListener('input', () => {
            const searchTerm = searchBox.value.toLowerCase().trim();

            bookListItems.forEach(item => {
                // Check title (h3) and description (p)
                const titleElement = item.querySelector('h3 a');
                const descriptionElement = item.querySelector('p');
                let itemText = '';

                if (titleElement) {
                    itemText += titleElement.textContent.toLowerCase();
                }
                if (descriptionElement) {
                    itemText += ' ' + descriptionElement.textContent.toLowerCase();
                }

                // Show or hide based on match
                if (itemText.includes(searchTerm)) {
                    item.style.display = ''; // Show item (reset to default display)
                    // Or use item.classList.remove('hidden'); if using the CSS class method
                } else {
                    item.style.display = 'none'; // Hide item
                    // Or use item.classList.add('hidden'); if using the CSS class method
                }
            });
        });
    }

    // --- Search for Chapters on bookX.html ---
    const searchBoxToc = document.getElementById('searchBoxToc');
    const tocListItems = document.querySelectorAll('.toc li');

    if (searchBoxToc && tocListItems.length > 0) {
        searchBoxToc.addEventListener('input', () => {
            const searchTerm = searchBoxToc.value.toLowerCase().trim();

            tocListItems.forEach(item => {
                // Check chapter link text (a)
                const linkElement = item.querySelector('a');
                let itemText = '';

                if (linkElement) {
                    itemText += linkElement.textContent.toLowerCase();
                }

                // Show or hide based on match
                if (itemText.includes(searchTerm)) {
                    item.style.display = ''; // Show item
                     // Or use item.classList.remove('hidden');
                } else {
                    item.style.display = 'none'; // Hide item
                    // Or use item.classList.add('hidden');
                }
            });
        });
    }
});