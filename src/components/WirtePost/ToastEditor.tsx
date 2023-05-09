import dynamic from 'next/dynamic';
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';

const EditorDynamic = dynamic(() => import('./Editor'), {
  ssr: false,
});

type PreviewStyle = 'tab' | 'vertical';

const EditorForwardRef = forwardRef(
  (props: EditorProps, ref: ForwardedRef<Editor>) => {
    return <EditorDynamic {...props} forwardedRef={ref} />;
  }
);

EditorForwardRef.displayName = 'Editor';

type contentType = {
  value: string;
};

const ToastEditor = ({ value }: contentType) => {
  const [previewStyle, setPreviewStyle] = useState<PreviewStyle>('vertical');
  const contentRef = useRef<Editor>(null);

  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    // ['image'],
    ['code'],
    ['scrollSync'],
  ];

  useEffect(() => {
    contentRef.current?.getInstance().setMarkdown('a');
    console.log('val', value);
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setPreviewStyle(isMobile ? 'tab' : 'vertical');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onSubmit = () => {
    const innerHTMLText = contentRef.current?.getInstance().getHTML();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = innerHTMLText as string;
    const text = tempDiv.textContent;

    console.log(innerHTMLText);
    console.log(text);
    console.log('^^^ text');
  };

  return (
    <div style={{ height: '400px' }}>
      <EditorForwardRef
        ref={contentRef}
        initialValue={value || ''}
        // previewStyle={'tab'}
        height="100%"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        usageStatistics={false}
        hideModeSwitch={true}
        toolbarItems={toolbarItems}
      />
      <button onClick={onSubmit}>등록</button>
    </div>
  );
};

export default ToastEditor;
