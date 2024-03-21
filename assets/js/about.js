let fig = document.querySelectorAll('.fig');

fig.forEach(function(element) {
    
    let effectsApplied = false;


    element.addEventListener('click', function(e) {
        e.preventDefault()
        let images = element.querySelectorAll('img');
        let headings = element.querySelectorAll('h3, h5');
        
        if (effectsApplied) {
            images.forEach(function(img) {
                img.style.opacity = '';
            });
            
            headings.forEach(function(heading) {
                heading.style.webkitTransform = '';
                heading.style.transform = '';
                heading.style.opacity = '';
            });

            effectsApplied = false;
        } else {
        
            images.forEach(function(img) {
                img.style.opacity = '0.1';
            });
            
            headings.forEach(function(heading) {
                heading.style.webkitTransform = 'translateY(0)';
                heading.style.transform = 'translateY(0)';
                heading.style.opacity = '1';
            });

            effectsApplied = true;
        }
    });
});
