import { useNavigate } from '@solidjs/router';
import { Button, Input, NewForm } from '@soku-solid/ui';
import { LoginAccount } from './api';
import { ScreenLayout } from '@/components';
import { UserInfoStore, TokenStore } from '@/stores';

export default function App() {
  const nav = useNavigate();
  const handleClick = async () => {
    try {
      const data = await LoginAccount(form.gets() as any);
      UserInfoStore.s(data.user);
      TokenStore.s(data.jwt);
      nav('/game');
    }
    catch { }
  };

  const [form] = NewForm.useForm();
  return (
    <ScreenLayout>
      <div class={'bg-#ddd p7 pt0 rounded-3'}>
        <NewForm form={form}>
          <NewForm.Item
            label={'用户名'}
            field={'id'}
            component={Input}
            width={'100%'}
            placeholder={'请输入用户名'}
          />
          <NewForm.Item
            label={'密码'}
            field={'passwd'}
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
