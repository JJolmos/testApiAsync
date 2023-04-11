var express = require("express");
var app = express();

const rsp = {
    mensaje: "OK",
    codigo: "OK",
    completado: true,
    dato: {
        obj: {}
    }
}

const rspE = {
    mensaje: "NO",
    codigo: "NO",
    completado: false,
    dato: null
}

const delay = ms => new Promise(res => setTimeout(res, ms));

app.listen(4000, () => {
    console.log("Server running on port 4000");
});

app.get("/Tget", (req, res, next) => {
    res.json(rsp);
});

app.post("/Tpost", (req, res, next) => {
    res.json(rsp);
});

app.get("/TgetAwait", async (req, res, next) => {
    await delay(8000);
    res.json(rsp);
});

app.post("/TpostAwait", async (req, res, next) => {
    await delay(8000);
    res.json(rsp);
});

app.get("/TgetError", (req, res, next) => {
    res.status(500).json(rspE);
});

app.post("/TpostError", (req, res, next) => {
    res.status(500).json(rspE);
});

//HDI----------------------------------------------------------------------------------------------------------

app.post("/api/PortalPagos/BusquedaPorPoliza", async (req, res, next) => {
    await delay(8000);
    let respuesta = {
        mensaje: "string",
        codigo: "string",
        compltado: true,
        dato: {
            poliza: {
                lineaNegocio: "string",
                rfc: "string",
                oficina: "string",
                numeroPoliza: "string",
                inciso: 0,
                nombreTitular: "string",
                nombreAgente: "string",
                formatoPoliza: "string",
                vigenciaInicio: "2023-04-01T00:47:31.564Z",
                vigenciaFin: "2023-04-01T00:47:31.564Z",
                aplicaMSI: true,
                texoMSI: "string",
                listaRecibos: [
                    {
                        folio: 0,
                        serie: 0,
                        noEndoso: "string",
                        estatus: "string",
                        vigenciaInicio: "2023-04-01T00:47:31.564Z",
                        vigenciaFin: "2023-04-01T00:47:31.564Z",
                        primaNeta: "string",
                        fechaPago: "2023-04-01T00:47:31.564Z",
                        chequeDevuelto: "string",
                        tipoRecibo: "string",
                        aplicaMeses: "string",
                        numeroRecibo: "string"

                    }
                ]
            }
        }
    }
    res.json(respuesta);
});

app.get("/api/PortalPagos/GenerarLigaPago", async (req, res, next) => {
    //await delay(8000);
    let respuesta = {
        "mensaje": "string",
        "codigo": "string",
        "completado": true,
        "dato": {
            "ligaPago": {
                "origen": 0,
                "senderID": "string",
                "depNumber": "string",
                "provider": "string",
                "monto": 0,
                "mesesSinIntereses": 0,
                "correo": "string",
                "vigenciaURL": "2023-04-01T00:54:55.835Z",
                "usuario": "string",
                "lineaNegocio": "string",
                "folios": "string"
            }
        }
    }
    res.json(respuesta);
});

app.get("/api/PortalPagos/BusquedaPorReferencia", async (req, res, next) => {
    await delay(8000);
    let respuesta = {
        "mensaje": "string",
        "codigo": "string",
        "completado": true,
        "dato": {
            "poliza": {
                "lineaNegocio": "string",
                "rfc": "string",
                "oficina": "string",
                "numeroPoliza": "string",
                "inciso": 0,
                "nombreTitular": "string",
                "nombreAgente": "string",
                "formatoPoliza": "string",
                "vigenciaInicio": "2023-04-01T00:56:31.363Z",
                "vigenciaFin": "2023-04-01T00:56:31.363Z",
                "aplicaMSI": true,
                "texoMSI": "string",
                "listaRecibos": [
                    {
                        "folio": 0,
                        "serie": 0,
                        "noEndoso": "string",
                        "estatus": "string",
                        "vigenciaInicio": "2023-04-01T00:56:31.364Z",
                        "vigenciaFin": "2023-04-01T00:56:31.364Z",
                        "primaNeta": "string",
                        "fechaPago": "2023-04-01T00:56:31.364Z",
                        "chequeDevuelto": "string",
                        "tipoRecibo": "string",
                        "aplicaMeses": "string",
                        "numeroRecibo": "string"
                    }
                ]
            }
        }
    }
    res.json(respuesta);
});

app.get("/api/PortalPagos/ComprobantePago", async (req, res, next) => {
    await delay(8000);
    let respuesta = {
        "mensaje": "string",
        "codigo": "string",
        "completado": true,
        "dato": {
            "poliza": {
                "lineaNegocio": "string",
                "rfc": "string",
                "oficina": "string",
                "numeroPoliza": "string",
                "inciso": 0,
                "nombreTitular": "string",
                "nombreAgente": "string",
                "formatoPoliza": "string",
                "vigenciaInicio": "2023-04-01T01:00:31.516Z",
                "vigenciaFin": "2023-04-01T01:00:31.516Z",
                "aplicaMSI": true,
                "texoMSI": "string",
                "listaRecibos": [
                    {
                        "folio": 0,
                        "serie": 0,
                        "noEndoso": "string",
                        "estatus": "string",
                        "vigenciaInicio": "2023-04-01T01:00:31.516Z",
                        "vigenciaFin": "2023-04-01T01:00:31.516Z",
                        "primaNeta": "string",
                        "fechaPago": "2023-04-01T01:00:31.517Z",
                        "chequeDevuelto": "string",
                        "tipoRecibo": "string",
                        "aplicaMeses": "string",
                        "numeroRecibo": "string"
                    }
                ]
            }
        }
    }
    res.json(respuesta);
});

app.get("/api/PortalPagos/ObtenerFormatoPago", async (req, res, next) => {
    await delay(8000);
    let respuesta = {
        "mensaje": "string",
        "codigo": "string",
        "completado": true,
        "dato": {
            "poliza": {
                "lineaNegocio": "string",
                "rfc": "string",
                "oficina": "string",
                "numeroPoliza": "string",
                "inciso": 0,
                "nombreTitular": "string",
                "nombreAgente": "string",
                "formatoPoliza": "string",
                "vigenciaInicio": "2023-04-01T01:00:31.516Z",
                "vigenciaFin": "2023-04-01T01:00:31.516Z",
                "aplicaMSI": true,
                "texoMSI": "string",
                "listaRecibos": [
                    {
                        "folio": 0,
                        "serie": 0,
                        "noEndoso": "string",
                        "estatus": "string",
                        "vigenciaInicio": "2023-04-01T01:00:31.516Z",
                        "vigenciaFin": "2023-04-01T01:00:31.516Z",
                        "primaNeta": "string",
                        "fechaPago": "2023-04-01T01:00:31.517Z",
                        "chequeDevuelto": "string",
                        "tipoRecibo": "string",
                        "aplicaMeses": "string",
                        "numeroRecibo": "string"
                    }
                ]
            }
        }
    }
    res.json(respuesta);
});

app.get("/api/PortalPagos/ObtenerFactura", async (req, res, next) => {
    await delay(8000);
    let respuesta = {
        "mensaje": "string",
        "codigo": "string",
        "completado": true,
        "dato": {
            "poliza": {
                "lineaNegocio": "string",
                "rfc": "string",
                "oficina": "string",
                "numeroPoliza": "string",
                "inciso": 0,
                "nombreTitular": "string",
                "nombreAgente": "string",
                "formatoPoliza": "string",
                "vigenciaInicio": "2023-04-01T01:00:31.516Z",
                "vigenciaFin": "2023-04-01T01:00:31.516Z",
                "aplicaMSI": true,
                "texoMSI": "string",
                "listaRecibos": [
                    {
                        "folio": 0,
                        "serie": 0,
                        "noEndoso": "string",
                        "estatus": "string",
                        "vigenciaInicio": "2023-04-01T01:00:31.516Z",
                        "vigenciaFin": "2023-04-01T01:00:31.516Z",
                        "primaNeta": "string",
                        "fechaPago": "2023-04-01T01:00:31.517Z",
                        "chequeDevuelto": "string",
                        "tipoRecibo": "string",
                        "aplicaMeses": "string",
                        "numeroRecibo": "string"
                    }
                ]
            }
        }
    }
    res.json(respuesta);
});

app.get("/api/PortalPagos/ObtenerTipoTarjeta", async (req, res, next) => {
    await delay(8000);
    let respuesta = {
        "mensaje": "string",
        "codigo": "string",
        "completado": true,
        "dato": [
            {
                "tipoTarjeta": {
                    "nombreTipo": "string",
                    "idTipo": "string"
                }
            }
        ]
    }
    res.json(respuesta);
});