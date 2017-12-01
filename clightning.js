var magik = magikcraft.io;

// chain lightning  
function clightning(repeats, delay) {
    var sender = magik.getSender();
    repeats = parseInt(repeats) || 1;
    delay = parseInt(delay) || 200;
    magik.shakti();        
    repeats--;
    if (sender.isSneaking()) {
        magik.dixit("l done via sneak");
        return;
    }
    if (repeats > 0) {
        var task = magik.setTimeout(
            function() {
                var sender2 = magik.getSender();
                sender = sender2;
                clightning(repeats, delay);
            },
            delay
        );
    } else {
        magik.dixit("e done");
    }
}