import {
  ContextMenu,
  DetailsView,
  FileManagerComponent,
  Inject,
  NavigationPane,
  Toolbar,
} from '@syncfusion/ej2-react-filemanager';
/**
 * File Manager sample with Amazon S3 file provider service
 */
const FileManager = () => {
  const hostUrl = 'https://amazons3.azurewebsites.net/api/AmazonS3Provider/';
  return (
    <div className='max-h-screen flex-1 space-y-4 overflow-y-auto p-4 pt-6 md:p-8'>
      <div className='flex items-center justify-between space-y-2'>
        <h2 className='text-3xl font-bold tracking-tight'>File Manager</h2>
      </div>
      <FileManagerComponent
        id='filemanager'
        ajaxSettings={{
          url: hostUrl + 'AmazonS3FileOperations',
          getImageUrl: hostUrl + 'AmazonS3GetImage',
          uploadUrl: hostUrl + 'AmazonS3Upload',
          downloadUrl: hostUrl + 'AmazonS3Download',
        }}
        searchSettings={{ allowSearchOnTyping: false }}
        view={'Details'}
        toolbarSettings={{
          items: [
            'NewFolder',
            'SortBy',
            'Cut',
            'Copy',
            'Paste',
            'Delete',
            'Refresh',
            'Download',
            'Rename',
            'Selection',
            'View',
            'Details',
          ],
        }}
        contextMenuSettings={{
          layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', '|', 'Details', '|', 'SelectAll'],
        }}
      >
        <Inject services={[NavigationPane, DetailsView, Toolbar, ContextMenu]} />
      </FileManagerComponent>
    </div>
  );
};
export default FileManager;
