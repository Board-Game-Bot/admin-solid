import { Button, Input, NewForm } from '@soku-solid/ui';
import { MaybePromise } from '@/types';
import { MarkdownDescription } from '@/pages/games/components/AddGameForm/components';

interface Props {
    onSubmit?: (data: Record<string, any>) => MaybePromise<any>;
}

export const AddGameForm = (props: Props) => {
  const [form] = NewForm.useForm();

  const handleSubmit = () => {
    const data = form.gets();
    props.onSubmit?.(data);
  };

  return (
    <div class={'absolute left-5 top-10 p10 bg-#333 text-12px'}>
      <NewForm form={form}>
        <NewForm.Item
          label={'ID'}
          field={'id'}
          component={Input}
          class={'bg-#555 rounded-2 border-0 text-xl p1'}
          placeholder={'游戏 ID'}
        />
        <NewForm.Item
          label={'描述'}
          field={'description'}
          component={MarkdownDescription}
        />
        <NewForm.Item
          label={'图标'}
          field={'icon'}
          component={Input}
          placeholder={'游戏图标(emoji)'}
          class={'bg-#555 rounded-2 border-0 text-xl p1'}
        />
        <NewForm.Item
          label={'玩家人数'}
          field={'playerCount'}
          component={Input}
          placeholder={'玩家人数'}
          class={'bg-#555 rounded-2 border-0 text-xl p1'}
        />
        <NewForm.Item
          label={'NPM 包'}
          field={'npmPackage'}
          component={Input}
          placeholder={'NPM 中所对应的游戏包'}
          class={'bg-#555 rounded-2 border-0 text-xl p1'}
        />
        <NewForm.Item
          label={'版本'}
          field={'version'}
          component={Input}
          placeholder={'游戏包版本'}
          class={'bg-#555 rounded-2 border-0 text-xl p1'}
        />
        <Button onClick={handleSubmit} class={'w-full mt4 flex justify-center items-center gap-4 text-2xl bg-#333 px3 py2 rounded-2'} >
          + 添加游戏
        </Button>
      </NewForm>
    </div>
  );
};