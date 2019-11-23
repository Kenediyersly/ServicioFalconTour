"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database/database");
var validaciones_logic_1 = require("../logic/validaciones.logic");
function getUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, password, conn, result, response, usuario, newusuario, resp, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    user = req.params.u;
                    password = req.params.p;
                    return [4 /*yield*/, database_1.connect()];
                case 1:
                    conn = _a.sent();
                    return [4 /*yield*/, conn.query("exec movil_getUser '" + user + "'")];
                case 2:
                    result = _a.sent();
                    conn.close();
                    response = result.recordsets[1];
                    if (response.length > 0) {
                        usuario = response[0];
                        newusuario = validaciones_logic_1.usuarioValidacion(usuario);
                        resp = result.recordsets[0][0].contrasenia;
                        if (resp == password) {
                            return [2 /*return*/, res.json({ size: response.length, objeto: [newusuario] })];
                        }
                        else {
                            return [2 /*return*/, res.json({ size: 0, objeto: [{ titulo: "Alerta", mensaje: "La contraseña ingresada es incorrecta" }] })];
                        }
                    }
                    else {
                        return [2 /*return*/, res.json({ size: response.length, objeto: [{ titulo: "Alerta", mensaje: "El usuario ingresado no existe" }] })];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    throw (err_1);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getUsuario = getUsuario;
function postInsertUserAndPerson(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, persona, usuario, p, u, conn, result, response, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, persona = _a.persona, usuario = _a.usuario;
                    p = persona;
                    u = usuario;
                    return [4 /*yield*/, database_1.connect()];
                case 1:
                    conn = _b.sent();
                    return [4 /*yield*/, conn.query("exec movil_newpersonanduser '" + p.nombre + "', '" + p.apellidos + "', '" + p.correo + "', '" + p.foto + "', '" + u.usuario + "', '" + u.contrasenia + "', '" + u.idtipousuario + "'")];
                case 2:
                    result = _b.sent();
                    conn.close();
                    response = result.recordset[0].response;
                    if (response == "NP") {
                        return [2 /*return*/, res.json({ size: 0, objeto: [{ titulo: "Alerta", mensaje: "Ya existe un turista con el mismo nombre" }] })];
                    }
                    else if (response == "NU") {
                        return [2 /*return*/, res.json({ size: 0, objeto: [{ titulo: "Alerta", mensaje: "Ya hay un turista con el mismo usuario" }] })];
                    }
                    else if (response == "OK") {
                        return [2 /*return*/, res.json({ size: 1, objeto: [{ titulo: "Exito", mensaje: "Los datos del turista han sido registrados correctamente" }] })];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _b.sent();
                    throw (err_2);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.postInsertUserAndPerson = postInsertUserAndPerson;
