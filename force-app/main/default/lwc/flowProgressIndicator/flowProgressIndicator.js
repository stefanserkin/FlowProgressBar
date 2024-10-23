import { LightningElement, api } from 'lwc';

export default class FlowProgressIndicator extends LightningElement {
    @api activeStages;
    @api currentStage;
}