const magik = magikcraft.io;

function exec(cmd) {
    const args = [].slice.call(arguments).join(' ');
    eval(args);
}