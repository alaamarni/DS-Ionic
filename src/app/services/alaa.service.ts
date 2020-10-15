import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoCoin } from '../models/crypto';

@Injectable({
  providedIn: 'root'
})
export class AlaaService {

  constructor(private httpClient: HttpClient) { }

  getCoinInfo(fiat: string, crypto: string){
    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=';

    return this.httpClient.get<CryptoCoin[]>(`${URL}${fiat}&ids=${crypto}`);

  }
}