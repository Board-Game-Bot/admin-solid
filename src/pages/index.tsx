import { useNavigate } from '@solidjs/router';
import { Button, Input, NewForm } from '@soku-solid/ui';
import { createEffect } from 'solid-js';
import { ScreenLayout } from '@/components';
import { TokenStore, UserInfoStore } from '@/stores';
import { client } from '@/api';
import { LoginAccountRequest } from '@/api/dtos';

export default function App() {
  const nav = useNavigate();
  const handleClick = async () => {
    try {
      const { Jwt } = await client.LoginAccount(form.gets() as LoginAccountRequest);
      TokenStore[1](Jwt);
    }
    catch { }
  };

  createEffect(async () => {
    const jwt = TokenStore[0]();
    if (!jwt) {
      return ;
    }
    const user = await client.GetUser({});
    UserInfoStore[1](user);
    nav('/game');
  });


  const [form] = NewForm.useForm();
  return (
    <ScreenLayout>
      <div class={'bg-#ddd p7 pt0 rounded-3'}>
        <NewForm form={form}>
          <NewForm.Item
            label={'用户名'}
            field={'Id'}
            component={Input}
            width={'100%'}
            placeholder={'请输入用户名'}
          />
          <NewForm.Item
            label={'密码'}
            field={'Password'}
            component={Input}
            placeholder={'请输入密码'}
            type={'password'}
            width={'100%'}
          />
          <Button class={'w-full'} onClick={handleClick}>登陆</Button>
        </NewForm>
      </div>
    </ScreenLayout>
  );
}
