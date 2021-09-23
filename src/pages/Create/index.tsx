import React, { useState } from 'react'
import { Form, Input, Button, Select, InputNumber, Spin } from 'antd'
import Modal from '../../components/Modal'

export default function Create() {
  const [modalOpen, setModalOpen] = useState(false)

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <h2>建立新的音频NFT商品</h2>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="音频的本文内容"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <>
            <p>Pizzap将根据文本内容结合音源通过AI学习技术模型产生的数字音频</p>
            <Input />
          </>
        </Form.Item>

        <Form.Item label="音源选择" name="w" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Select>
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="Yiminghe">yiminghe</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="商品名称" name="d" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="描述" name="z" rules={[{ required: true, message: 'Please input your password!' }]}>
          <>
            <p>该描述将包含在该商品的图像下方的商品详细页面上。</p>
            <Input.TextArea showCount maxLength={1000} />
          </>
        </Form.Item>

        <Form.Item label="解锁内容" name="ds" rules={[{ required: true, message: 'Please input your password!' }]}>
          <>
            <p>包括只能由商品拥有者显示的可解锁内容。</p>
            <Input />
          </>
        </Form.Item>

        <Form.Item label="铸造NFT数量" name="zs" rules={[{ required: true, message: 'Please input your password!' }]}>
          <>
            <p>可以制造的NFT数量。没有Gas成本!超过1的数量很快就会到来。</p>
            <InputNumber min={1} max={10} />
          </>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            创建
          </Button>
        </Form.Item>
      </Form>
      <Button onClick={() => setModalOpen(!modalOpen)}>click</Button>

      <Modal isOpen={modalOpen} onDismiss={() => setModalOpen(false)} minHeight={false} maxHeight={90}>
        <div>
          <p>请稍等</p>
          <p>请在钱包中签名！无需担心，此操作无Gas费！</p>
          <Spin size="large" />
        </div>
      </Modal>
    </div>
  )
}
