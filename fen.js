"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var cg = require("./types");
exports.initial = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
var roles = { p: 'pawn', r: 'rook', n: 'knight', b: 'bishop', q: 'queen', k: 'king' };
var letters = { pawn: 'p', rook: 'r', knight: 'n', bishop: 'b', queen: 'q', king: 'k' };
function read(fen) {
    if (fen === 'start')
        fen = exports.initial;
    var pieces = {};
    var row = 8;
    var col = 0;
    for (var _i = 0, fen_1 = fen; _i < fen_1.length; _i++) {
        var c = fen_1[_i];
        switch (c) {
            case ' ': return pieces;
            case '/':
                --row;
                if (row === 0)
                    return pieces;
                col = 0;
                break;
            case '~':
                pieces[util_1.pos2key([col, row])].promoted = true;
                break;
            default:
                var nb = c.charCodeAt(0);
                if (nb < 57)
                    col += nb - 48;
                else {
                    ++col;
                    var role = c.toLowerCase();
                    pieces[util_1.pos2key([col, row])] = {
                        role: roles[role],
                        color: (c === role ? 'black' : 'white')
                    };
                }
        }
    }
    return pieces;
}
exports.read = read;
function write(pieces) {
    var piece, letter;
    return util_1.invRanks.map(function (y) { return cg.ranks.map(function (x) {
        piece = pieces[util_1.pos2key([x, y])];
        if (piece) {
            letter = letters[piece.role];
            return piece.color === 'white' ? letter.toUpperCase() : letter;
        }
        else
            return '1';
    }).join(''); }).join('/').replace(/1{2,}/g, function (s) { return s.length.toString(); });
}
exports.write = write;
