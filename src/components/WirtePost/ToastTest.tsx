import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
// import axios from 'axios';

const EditorDynamic = dynamic(() => import('./Editor'), {
  ssr: false,
});

const EditorForwardRef = forwardRef((props, ref: ForwardedRef<Editor>) => {
  return <EditorDynamic {...props} forwardedRef={ref} />;
});

EditorForwardRef.displayName = 'Editor';

export default function BoardWrite() {
  const [value, setValue] = useState('');
  const contentRef = useRef<Editor>(null);

  useEffect(() => {
    const valueExam =
      '**type here!** \n# hi\n## hello\n*byeddddd*\n\n| hi |hello  |\n| --- | --- |\n|  aa|bb  |';

    setValue(valueExam);
  }, []);

  const onSubmit = () => {
    // console.log('html', contentRef.current?.getInstance().getHTML());
    // console.log('markdown', contentRef.current?.getInstance().getMarkdown());
    // const testtest = contentRef.current?.getInstance().getMarkdown();

    // const result = axios.post('http://127.0.0.1:3080/api/v1/posts', {
    //   title: 'hi',
    //   content: testtest,
    // });

    const innerHTMLText = contentRef.current?.getInstance().getHTML()

    const tempDiv = document.createElement('div')

    tempDiv.innerHTML = innerHTMLText as string;

    const text = tempDiv.textContent

    console.log(text)
    console.log('^^^ text')
  };

  return (
    <div id="textContentTest" style={{ height: '400px' }}>
      <EditorForwardRef
        ref={contentRef}
        initialValue={value}
        previewStyle="vertical"
        height="100%"
        initialEditType="markdown"
        useCommandShortcut={false}
        hideModeSwitch={true}
      />
      <button onClick={onSubmit}>등록</button>
    </div>
  );
}
