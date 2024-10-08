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

</div>



    </main>
  );
}

export default App;
