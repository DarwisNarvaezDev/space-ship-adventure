import { MenuStatusColor } from "../interfaces/MenuStatusColor.tsx";
import { Messages } from "../messages/Messages.tsx";

export enum MenuActionKind {
    RECEIVING_DATA = "RECEIVING",
    WAITING_FOR_COMMAND = "WAITING",
    READY_FOR_LAUNCH = "READY",
    SHOW_CLICK_HINT = "CLICK",
    SHOW_STATUS_MESSAGE = "MESSAGE",
    HIDE_SHOW_MENU = "HIDE_MENU",
    SET_MENU_DATA = "SET_MENU"
}

export interface MenuActionPayload {
    isInputsDisabled?: boolean
    isLaunchButtonsDisabled?: boolean
    statusText?: string
    statusColor?: string
    distance?: number
    rocketSpeed?: number
    flightTime?: number
}

interface MenuAction {
    type: MenuActionKind;
    payload: MenuActionPayload
}

export function menuReducer(state: MenuActionPayload, action: MenuAction) {
    const { type, payload } = action;
    switch (type) {
        case MenuActionKind.WAITING_FOR_COMMAND:
            return {
                isInputsDisabled: false,
                isLaunchButtonsDisabled: true,
                statusText: Messages.menu.waitingForCommand,
                statusColor: MenuStatusColor.waitingCommand
            }
        case MenuActionKind.RECEIVING_DATA:
            return {
                isInputsDisabled: false,
                isLaunchButtonsDisabled: false,
                statusText: Messages.menu.ReceivingCommand,
                statusColor: MenuStatusColor.receivingCommand
            }
        case MenuActionKind.READY_FOR_LAUNCH:
            return {
                ...state,
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
            switch (state.statusColor) {
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
        case MenuActionKind.HIDE_SHOW_MENU:
            return {
                ...state
            }
        case MenuActionKind.SET_MENU_DATA:
            return {
                ...state,
                distance: state.distance == payload.distance ? state.distance : payload.distance,
                flightTime: state.flightTime == payload.flightTime ? state.flightTime : payload.flightTime,
                rocketSpeed: state.rocketSpeed == payload.rocketSpeed ? state.rocketSpeed : payload.rocketSpeed,
            }
        default:
            return state;
    }
}