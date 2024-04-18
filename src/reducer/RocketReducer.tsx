import RocketStyle from '../styles/elements/rocket.module.css';
import BackgroundStyle from '../styles/scenario/background.module.css';

export enum RocketActionKind {
    LAUNCH_TO_PLANET,
    SHUT_DOWN,
    STRANDED
}

export interface RocketActionPayload {
    landingAndApproxClass: string
    shiftShuttleClass: string
    spaceAnimationClass: string,
    isRocketSmoke: boolean,
    isRocketLaunched: boolean,
    isRocketStranded: boolean
}

interface RocketAction {
    type: RocketActionKind
    payload: RocketActionPayload
}

export function rocketReducer( state: RocketActionPayload, action: RocketAction ){
    const { type, payload } = action;
    switch(type){
        case RocketActionKind.LAUNCH_TO_PLANET:
            return {
                ...state,
                landingAndApproxClass: RocketStyle.animateRocket,
                shiftShuttleClass: BackgroundStyle.shiftShuttleAnimation,
                spaceAnimationClass: BackgroundStyle.spaceAnimation,
                isRocketSmoke: true,
                isRocketLaunched: true,
            }
        case RocketActionKind.SHUT_DOWN:
            return {
                ...state,
                isRocketSmoke: false
            }
        case RocketActionKind.STRANDED:
            return {
                ...state,
                isRocketStranded: true
            }
    }
}