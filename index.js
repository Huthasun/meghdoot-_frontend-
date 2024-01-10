
function names(path) {
    fetch(path)
    .then(response => response.text())
    .then(htmlContent => {
        const container = document.createElement('div');
        container.innerHTML = htmlContent;

        document.body.appendChild(container);

        if (path == './fristscreen/firstscreen.html' ) {
            console.log("first");
            let script1 = document.getElementById('script')
            script1.setAttribute('src','./fristscreen/index.js')

            
        } else if  (path == './secondscreen/secondscreen.html'){
            console.log('second');
            const script2 = document.getElementById('script')
            script2.setAttribute('src','./secondscreen/secondscreen.js')

            
        } else {
            console.log("third");
            const script3 = document.getElementById('script')
            script3.setAttribute('src','./thirdscreen/thirdscreen.js')

        }
        
        
        
    });
    // console.log(path.toString())
    
}
names('./fristscreen/firstscreen.html')
// names('./secondscreen/secondscreen.html')
// names('./thirdscreen/thirdscreen.html')