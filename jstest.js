var encrypted = "391c386802157d2e431475161166314415623f021a550e6b673e3b7e4d014a6773564a3e5502175c0e5750137d7e74175d05444e034e40757c2f6d655244386875626c481633220c12536a5a010268083462696e602c417e700e6b3364235a1a7f36564f351f2f7b1a2940137d7e74175d05444e034e40757c2f22170a787119";
var MD5 = function(d) {
    var r = M(V(Y(X(d), 8 * d.length)));
    return r.toLowerCase();
};

function M(d) {
    for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
    return f;
}

function X(d) {
    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
    for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
    return _;
}

function V(d) {
    for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
    return _;
}

function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
        var h = m,
            t = f,
            g = r,
            e = i;
        f = (md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e));
    }
    return Array(m, f, r, i);
}

function md5_cmn(d, _, m, f, r, i) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
}

function md5_ff(d, _, m, f, r, i, n) {
    return md5_cmn(_ & m | ~_ & f, d, _, r, i, n);
}

function md5_gg(d, _, m, f, r, i, n) {
    return md5_cmn(_ & f | m & ~f, d, _, r, i, n);
}

function md5_hh(d, _, m, f, r, i, n) {
    return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
}

function md5_ii(d, _, m, f, r, i, n) {
    return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
}

function safe_add(d, _) {
    var m = (65535 & d) + (65535 & _);
    return ((d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m);
}

function bit_rol(d, _) {
    return (d << _ | d >>> 32 - _);
}

function blocksNeeded(l, pw) {
    var leng = l;
    var trueLength = ((leng * 2) + (((pw.length) * 2) + 1));
    var blocksNeeded = Math.ceil(trueLength / 256);
    return blocksNeeded;
}

function paddingNeeded(l, pw) {
    var leng = l;
    var trueLength = ((leng * 2) + (((pw.length) * 2) + 1));
    var blocksNeeded = Math.ceil(trueLength / 256);
    var paddingNeeded = (blocksNeeded * 256) - trueLength;
    return paddingNeeded;
}

function generatePad(pw, b) {
    var key = pw;
    var newKey = key;
    var output = "";
    var pad = "";
    var hashes = [];
    var count = 0;
    for (let i = 0; i < (b * 8); i++) {
        hashes[i] = MD5(newKey);
        newKey = newKey + newKey[i];
    };
    while (pad.length < (b * 256)) {
        for (var x = 0; x < hashes.length; x++) {
            pad = pad + hashes[x][(count % 32)];
        }
        count = count + 1;
    };
    return pad;
}

function decrypt(str, pw) {
    var pad = generatePad(pw, (str.length / 256));
    var thing = str;
    var a;
    var b;
    var c;
    var d;
    var checkpw = "";
    var output = "";
    var result = "";
    var one = false;
    var x = 0;
    while (output.length < pad.length) {
        a = pad[x] + pad[x + 1];
        b = thing[x] + thing[x + 1];
        c = (convertHex2Int(b) - convertHex2Int(a)) % 128;
        if (c < 0) {
            c = 128 + c;
        }
        d = convertInt2Hex(c);
        output = output + d;
        x = x + 2;
    }
    for (let x = 0; x < (pw.length * 2); x++) {
        checkpw = checkpw + output[(output.length - (pw.length * 2) + x)];
    }
    for (let j = (output.length - (pw.length * 2)); j > -1; j = j - 1) {
        if (one === false && output[j] === "0") {} else if (one === false && output[j] === "1") {
            one = true;
        } else if (one === true) {
            result = output[j] + result;
        }
    }
    if (convertHex2Txt(checkpw) === pw && pw !== "") {
        return convertHex2Txt(result);
    } else {
        return 0;
    }
}

function convertHex2Txt(str) {
    var input = str.toString();
    var output = "";
    for (var n = 0; n < input.length; n = n + 2) {
        output = output + String.fromCharCode(parseInt(input.substr(n, 2), 16));
    }
    return output;
}

function convertTxt2Hex(str) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
        output = output + "" + str.charCodeAt(i).toString(16);
    }
    if (output.length < 2) {
        output = "0" + output;
    }
    return output;
}

function convertHex2Int(number) {
    var temp;
    temp = parseInt(number, 16);
    return temp;
}

function convertInt2Hex(number) {
    var temp;
    temp = number.toString(16);
    if (temp.length < 2) {
        temp = "0" + temp;
    }
    return temp;
}
var i = 0;
var attempts = 0;;

window.onload = function() {
    var input = document.getElementById("inputpw");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("inputpw").click();
        }
    });
};

function doEverything() {
    var pw = document.getElementById("inputpw").value;
    var truepw = "";
    decrypted = decrypt(encrypted, pw);
    console.log(decrypted);
    document.getElementById("inputpw").style = "none";
    if (decrypted === 0) {
        var inputPwBox = document.querySelector(".inputpw");
        if (inputPwBox.classList.contains("shakeThing")) {
            inputPwBox.classList.remove("shakeThing");
            inputPwBox.classList.add("shakeThing1");
        } else {
            inputPwBox.classList.add("shakeThing");
            inputPwBox.classList.remove("shakeThing1");
        }
    } else {
        document.getElementById("hint").style.display = "none";
        document.getElementById("inputpw").style.display = "none";
        typeDecrypted();
    }
}

function typeDecrypted() {
    var length = decrypted.length;
    var currentString = "";
    var speed = 25;
    if (i < length) {
        document.getElementById("decrypted").innerHTML = document.getElementById("decrypted").innerHTML + decrypted.charAt(i);
        i = i + 1;
        setTimeout(typeDecrypted, speed);
    }
}

const element = document.getElementById('inputpw')

element.focus({
    preventScroll: true
});


window.scrollTo(0, 0);