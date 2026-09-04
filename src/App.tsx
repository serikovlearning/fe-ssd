import { Button, Space, Typography } from 'antd';

function App() {
  return (
    <main>
      <Space direction="vertical" size="middle">
        <Typography.Title level={1}>Frontend is ready</Typography.Title>
        <Button type="primary">Ant Design works</Button>
      </Space>
    </main>
  );
}

export default App;
