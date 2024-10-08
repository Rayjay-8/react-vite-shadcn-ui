import CountBtn from '@/components/CountBtn';
import ReactSVG from '@/assets/react.svg';
import { Badge } from '@/components/ui/badge';
import { dados } from './contants';
import { useLocalStorage } from 'usehooks-ts'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './components/ui/button';

function App() {

  const [value, setValue, removeValue] = useLocalStorage('test-key', 0)

  const usuariologado = dados.users.find(e => e.id === value)

  function pixin(){
    return 0
  }
  
  function pixout(){
    return 0
  }

  return (
    <main className="">
      <h1 className='text-4xl'>Ray + pix + p2p</h1>
      <div className='flex gap-6'>
        <p>Usuario: {usuariologado?.name}</p>
        <p>Saldo: R${usuariologado?.totalcoin}</p>
      </div>
      <div className='flex gap-6 items-center justify-center flex-wrap text-justify w-fill  '>
        <Select onValueChange={(e) => setValue(e)}>
          <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder={usuariologado?.name ?? "Logar"}  />
          </SelectTrigger>
          <SelectContent >
          {dados.users.map(e => {
                return(<SelectItem   key={e.id} value={e.id}>{e.name}</SelectItem>)
              })}
          </SelectContent>
        </Select>
        <Button onClick={() => {removeValue()}}>Logout</Button>
        <Button onClick={() => {pixout()}}>Sacar R$
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
        </svg>
        </Button>
        <Button onClick={() => {pixin()}}>Adicionar R$
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
        </svg>
        </Button>
      </div>
    </main>
  );
}

export default App;
