import { Button, Drawer, TextArea } from '@soku-solid/ui';
import { SolidMarkdown } from 'solid-markdown';
import { createSignal } from 'solid-js';
import { ChangeValue } from '@/types';

interface Props extends ChangeValue<string> {

}

export const MarkdownDescription = (props: Props) => {
  const [visible, setVisible] = createSignal(false);
  const [description, setDescription] = createSignal(props.value ?? '');

  const handleOK = () => {
    setVisible(false);
    props.onChange?.(description());
  };

  return (
    <>
      <Button onClick={() => setVisible(true)} class={'w-full'}>编辑</Button>
      <Drawer onCancel={() => setVisible(false)} onOk={handleOK} title={'编辑描述'} visible={visible()} width={'80vw'}>
        <div class={'flex w-full h-full'}>
          <div class={'flex-1 w-full h-1000px overflow-auto p6 box-border'}>
            <SolidMarkdown class={'w-full h-full'} >
              {description()}
            </SolidMarkdown>
          </div>
          <div class={'flex-1 h-full p5 box-border'}>
            <TextArea width={'100%'} value={description()} onChange={v => setDescription('' + v)} />
          </div>
        </div>
      </Drawer>
    </>
  );
};