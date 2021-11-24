import { Component } from '@angular/core';
import { InfoService } from '../../../services/info.service';
import { TerrajsService } from '../../../services/terrajs.service';
import { MsgExecuteContract } from '@terra-money/terra.js';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CONFIG } from '../../../consts/config';
import { floor, times } from '../../../libs/math';
import { MdbModalService } from 'mdb-angular-ui-kit';

@Component({
  selector: 'app-unstake-all',
  templateUrl: './unstake-all.component.html',
  styleUrls: ['./unstake-all.component.scss']
})
export class UnstakeAllComponent {

  constructor(
    public info: InfoService,
    private terrajs: TerrajsService,
    private modalService: MdbModalService,
    protected $gaService: GoogleAnalyticsService,
  ) { }

  disableManageRewards(){
    return !this.info.portfolio?.total_reward_ust;
  }

  async manageRewards() {
    // TODO:: remove

    if (this.disableManageRewards()) {
      return;
    }

    const modal = await import('../manage-rewards/manage-rewards.component');
    this.modalService.open(modal.ManageRewardsComponent, {
      ignoreBackdropClick: true,
      modalClass: 'modal-xl',
    });
  }

  asIsOrder() {
    return 1;
  }

  key(item: any) {
    return item.key;
  }
}
