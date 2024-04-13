import { MenuStatusColor } from "../interfaces/MenuStatusColor.tsx";
import { Messages } from "../messages/Messages.tsx";

export enum MenuActionKind {
    RECEIVING_DATA = "RECEIVING",
    WAITING_FOR_COMMAND = "WAITING",
    READY_FOR_LAUNCH = "READY",
    SHOW_CLICK_HINT = "CLICK",
    SHOW_STATUS_MESSAGE = "MESSAGE"
}

export interface MenuActionPayload {
    isInputsDisabled?: boolean
    isLaunchButtonsDisabled?: boolean
    statusText?: string
    statusColor?: string
}

interface MenuAction {
    type: MenuActionKind;
    payload: MenuActionPayload
}

export function menuReducer(state: MenuActionPayload, action: MenuAction){
    const { type, payload } = action;
    switch( type ){
        case MenuActionKind.WAITING_FOR_COMMAND:
            return {
                isInputsDisabled: false,
                isLaunchButtonsDisabled: true,
                statusText: Messages.menu.waitingForCommand,
                statusColor: MenuStatusColor.waitingCommand
            }
        case MenuActionKind.RECEIVING_DATA:
            return {
                isInputsDisabled: true,
                isLaunchButtonsDisabled: true,
                statusText: Messages.menu.ReceivingCommand,
                statusColor: MenuStatusColor.receivingCommand
            }
        case MenuActionKind.READY_FOR_LAUNCH:
                return {
                    isInputsDisabled: false,
                    isLaunchButtonsDisabled: false,
                    statusText: Messages.menu.ReadyForLaunch,
                    statusColor: MenuStatusColor.readyForLaunch
                }
        case MenuActionKind.SHOW_CLICK_HINT:
                return {
                    ...state,
                    statusText: Messages.menu.clickToEnterCommand
                }    
        case MenuActionKind.SHOW_STATUS_MESSAGE:
                switch(state.statusColor){
                    case MenuStatusColor.waitingCommand:
                        return {
                            ...state,
                            statusText: Messages.menu.waitingForCommand
                        }
                    case MenuStatusColor.receivingCommand:
                        return {
                            ...state,
                            statusText: Messages.menu.ReceivingCommand
                        }
                    case MenuStatusColor.readyForLaunch:
                        return {
                            ...state,
                            statusText: Messages.menu.ReadyForLaunch
                        }
                }
        default:
            return state;
    }
}