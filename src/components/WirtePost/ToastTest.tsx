import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import { forwardRef, useEffect, useRef, useState } from 'react';
// import axios from 'axios';

const EditorDynamic = dynamic(() => import('./Editor'), {
  ssr: false,
});

const EditorForwardRef = forwardRef((props, ref) => {
  return <EditorDynamic {...props} forwardedRef={ref} />;
});

EditorForwardRef.displayName = 'Editor';

export default function BoardWrite() {
  const [value, setValue] = useState('');
  const contentRef = useRef(null);

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

    const test = contentRef.current?.getInstance().getHTML();
    const test2 = document.querySelector(
      '#textContentTest .ProseMirror.toastui-editor-contents'
    );
    console.log('textContent', test2);
    console.log('textContent', test2?.innerHTML.replace(/<[^>]+>/g, '\n'));
    console.log('textContent', test2?.innerHTML.replace(/<br>/g, '\n'));
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
