import { Button, Drawer, TextArea } from '@soku-solid/ui';
import { SolidMarkdown } from 'solid-markdown';
import { useSignal } from '@soku-solid/utils';
import { ChangeValue } from '@/types';

interface Props extends ChangeValue<string> {

}

export const MarkdownDescription = (props: Props) => {
  const visible = useSignal(false);
  const handleOK = () => {
    visible.s(false);
    props.onChange?.(description.v()!);
  };

  const description = useSignal(props.value);
  return (
    <>
      <Button onClick={() => visible.s(true)} class={'w-full bg-#555'}>编辑</Button>
      <Drawer onCancel={() => visible.s(false)} onOk={handleOK} title={'编辑描述'} visible={visible.v()} width={'80vw'}>
        <div class={'flex w-full h-full bg-#333'}>
          <div class={'flex-1 w-full h-1000px overflow-auto bg-#333 p6 box-border'}>
            <SolidMarkdown class={'w-full h-full'} children={description.v()} />
          </div>
          <div class={'flex-1 bg-#333 h-full p5 box-border'}>
            <TextArea width={'100%'} value={description.v()} onChange={v => description.s('' + v)} />
          </div>
        </div>
      </Drawer>
    </>
  );
};