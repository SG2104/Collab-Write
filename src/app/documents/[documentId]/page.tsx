import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface documentIdPageProps {
    params: Promise<{ documentId: string }>;
  }

const documentIdPage = async ({ params }: documentIdPageProps) => {
    const {documentId} = await params;   

    return ( 
        <div className="min-h-screen bg-[#FAFBFD]">
            <Toolbar />
            <Editor />
        </div>
     );
}
 
export default documentIdPage;
