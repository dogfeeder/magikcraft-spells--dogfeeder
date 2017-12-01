const magik = magikcraft.io;

function cfire(repeats, delay) {
    var sender = magik.getSender();
    repeats = parseInt(repeats) || 5;
    delay = parseInt(delay) || 300;
    magik.infierno();        
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
                cfire(repeats, delay);
            },
            delay
        );
    } else {
        magik.dixit("e done");
    }
}