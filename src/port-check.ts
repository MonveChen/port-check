/*
 * @Author: Monve
 * @Date: 2021-11-25 18:09:03
 * @LastEditors: Monve
 * @LastEditTime: 2022-02-23 16:15:46
 * @FilePath: /port-check/src/port-check.ts
 */

import { Socket } from 'node:net';

interface HOST_INFO {
  host: string,
  port: number,
  timeout: number
}

export const isReachable = async ({ host = '127.0.0.1', port, timeout = 1000 }: HOST_INFO): Promise<boolean> => {

  return new Promise<boolean>((resolve, reject) => {
    const socket = new Socket()
    socket.setTimeout(timeout)

    const onFail = () => {
      socket.destroy();
      reject(false);
    }
    socket.once('error', onFail);
    socket.once('timeout', onFail);

    socket.connect(port, host, () => {
      socket.end();
      resolve(true)
    })

  })
}