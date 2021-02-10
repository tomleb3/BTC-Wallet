import { Component, OnInit, Input } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from '../../model/user.model'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() user: UserModel
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) { }

  bitRateInUsd = null
  coinsInUsd = null

  async ngOnInit(): Promise<void> {
    this.user = this.userService.getUser()
    const bitcoinRate = await this.bitcoinService.getRate()
    this.coinsInUsd = (this.user.coins / bitcoinRate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    this.bitRateInUsd = (1 / bitcoinRate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
}
