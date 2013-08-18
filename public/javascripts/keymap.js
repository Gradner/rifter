//Setting up keyup and keydown functions
//to fix delay in key auto-repeat by
//creating values representing held keys

window.onkeydown = Down
window.onkeyup = Up

    var pressedl = 0;
    var pressedu = 0;
    var pressedr = 0;
    var pressedd = 0;
    var pressedshift = 0;
    var pressedpgdn = 0;
    var pressedpgup = 0

    function Down(e) { 
        cxc = e.keyCode;
        if(cxc == 37)
            pressedl = 1;
        if(cxc == 38)
            pressedu = 1;
        if(cxc == 39)
            pressedr = 1;
        if(cxc == 40)
            pressedd = 1;
        if(cxc == 16)
            pressedshift = 1;
        if(cxc == 34)
            pressedpgdn = 1;
        if(cxc == 33)
            pressedpgup = 1;
        //alert(cxc);
        }
    function Up(e) {
        cxc = e.keyCode;
        if(cxc == 37)
            pressedl = 0;
        if(cxc == 38)
            pressedu = 0;
        if(cxc == 39)
            pressedr = 0;
        if(cxc == 40)
            pressedd = 0;
        if(cxc == 16)
            pressedshift = 0;
        if(cxc == 34)
            pressedpgdn = 0;
        if(cxc == 33)
            pressedpgup = 0;
        //alert(cxc)
        //^uncomment to test keypresses
        }