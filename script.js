//your JS code here. If required.
document.getElementById('removeButton').addEventListener('click', function() {
            let select = document.getElementById('colorSelect');
            let selectedIndex = select.selectedIndex;
            if (selectedIndex !== -1) {
          
                select.remove(selectedIndex);
            } else {
                alert("Please select a color to remove.");
            }
        })