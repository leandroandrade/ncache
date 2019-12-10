'use strict';

const request = require('supertest');

const app = require('../src/app');

describe('retorna carros', function () {

    it('deve retornar o carro pela placa informada ', async done => {

        const placa = 'jjt1234';

        const { status, body } = await request(app)
            .get(`/ncache/carros/${ placa }`);

        const carro = body;

        expect(status).toBe(200);
        expect(carro).not.toBeNull();
        expect(carro).not.toBeUndefined();

        done();
    });

});