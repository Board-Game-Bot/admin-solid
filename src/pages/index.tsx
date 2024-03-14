import { createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { LoginAccount } from './api';
import { Button, Input, ScreenLayout } from '@/components';
import { UserInfoStore, TokenStore } from '@/stores';

export default function App() {
  const [name, setName] = createSignal('');
  const [passwd, setPasswd] = createSignal('');

  const nav = useNavigate();
  const handleClick = async () => {
    try {
      const data = await LoginAccount({
        id: name(),
        passwd: passwd(),
      });
      UserInfoStore.s(data.user);
      TokenStore.s(data.jwt);
      nav('/game');
    }
    catch { }
  };

  return (
    <ScreenLayout>
      <div class={'flex flex-col gap-3 items-start bg-#222 p7 rounded-3'}>
        <div>用户名</div>
        <Input value={name()} onChange={setName} />
        <div>密码</div>
        <Input value={passwd()} onChange={setPasswd} />
        <Button onClick={handleClick}>登陆</Button>
      </div>
    </ScreenLayout>
  );
}
