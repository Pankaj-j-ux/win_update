

    const typeWriter = function() {
        
        this.pankaj= 1;
        this.pj=2;
        const txt = '';
        const wordIndex = 0;
        const isDeleting = false;

        function type() {
            console.log(this.pj);
            console.log(this);
        }
        
        type();
    
    }
    
    typeWriter();

    
    
    // function init() {
               
    //     const txtElement = document.getElementById('text-type');
        
    //     const words = [];
    //     const word1 = txtElement.getAttribute('data-word1');
    //     const word2 = txtElement.getAttribute('data-word2');
    //     const word3 = txtElement.getAttribute('data-word3');
    //     words.push(word1);
    //     words.push(word2);
    //     words.push(word3);
    
    //     const wait = txtElement.getAttribute('data-wait');
        
    //     typeWriter(txtElement, words , wait);
        
    // }

    // init();