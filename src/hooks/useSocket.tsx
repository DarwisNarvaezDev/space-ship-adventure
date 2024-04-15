import { useEffect, useState } from 'react';
import socketIOClient, { Socket, io } from 'socket.io-client';

export interface ExternalCommand {
    distance: number
    rocketSpeed: number
    flightTime: number
}

interface ServerToClientEvents {
    command: (state: ExternalCommand) => void
}

export function useSocket({ endpoint, appToken }: { endpoint: string, appToken: string }) {

    const socket: Socket<ServerToClientEvents> = io(endpoint, {
      auth: {
        token: appToken
      }
    })
    const [ isConnected, setIsConnected ] = useState(false)

    useEffect(() => {
        console.log('useSocket useEffect', endpoint, socket)
    
        function onConnect() {
          setIsConnected(true)
        }
    
        function onDisconnect() {
          setIsConnected(false)
        }
    
        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
    
        return () => {
          socket.off('connect', onConnect)
          socket.off('disconnect', onDisconnect)
        }
      }, []);

      return {
        isConnected,
        socket,
      };
}