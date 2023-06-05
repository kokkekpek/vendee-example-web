import { TonClient } from '@eversdk/core'
import { libWeb } from '@eversdk/lib-web'
import { Global, delay } from 'vendee'
import { Example } from 'vendee-example'
import React, { Dispatch, SetStateAction, useState } from 'react'
import css from './App.module.sass'

const ADDRESS = '0:0d01f835c90fed8f59ff2ecfd18c56caa88d9d1fec90146adfd182e0bf88d25d'
const SCAN = `https://devnet.venomscan.com/accounts/${ADDRESS}`
const SOURCE_GITHUB = 'https://github.com/kokkekpek/vendee-example-web'
const CONTRACT_GITHUB = 'https://github.com/kokkekpek/vendee-example'
const VENDEE_GITHUB = 'https://github.com/kokkekpek/vendee'
const ENDPOINTS = ['https://gql-devnet.venom.network']
const DELAY = 2000

TonClient.useBinaryLibrary(libWeb as any)
Global.client = new TonClient({ network: { endpoints: ENDPOINTS } })
const example = new Example({ address: ADDRESS })

const update = async (setter: Dispatch<SetStateAction<number>>): Promise<void> => {
  const count = (await example.run.getCount()).count
  setter(parseInt(BigInt(count).toString()))
  await delay(DELAY)
  await update(setter)
}

const run = (setter: Dispatch<SetStateAction<number>>): void => {
  setTimeout(async (): Promise<void> => await update(setter), 0)
}

export const App = (): React.ReactElement => {
  const [count, setCount] = useState(0)
  run(setCount)
  return (<div className={css.App}>
      <div className={css.content}>
        <h2>Address</h2>
        <p><a className={css.address} href={SCAN}>{ADDRESS}</a></p>
        <h2 className={css.padding}>Method <span className={css.method}>getCount</span> returns</h2>
        <p><span className={css.method}>{count === 0 ? '.' : count}</span></p>
        <p className={css.padding}><a href={SOURCE_GITHUB}>source</a></p>
        <p><a href={CONTRACT_GITHUB}>contract</a></p>
        <p className={css.padding}><span className={css.powered}>Powered by</span></p>
        <p><a href={VENDEE_GITHUB}>Vendee</a></p>
      </div>
  </div>)
}
