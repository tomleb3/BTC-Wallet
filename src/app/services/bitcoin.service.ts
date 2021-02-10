import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  async getRate() {
    const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    return res.data
  }
  getMarketPrice() {

  }
  getConfirmedTransactions() {

  }
}
