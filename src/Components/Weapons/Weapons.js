import { Input } from "antd";
import { Button } from "antd";
import { Space } from "antd";
import { Table } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from "@ant-design/icons";
import React, {useState , useEffect , useRef}from "react";

export default function Weapons() {
  const [weapons, setWeapons] = useState()
  const [loading, setLoading] = useState(true)
  const [searchedColumn, setSearchedColumn] = useState('')
  const [searchText, setSearchText] = useState('')

  var searchInput = useRef()
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    
      setSearchText(selectedKeys[0]) 
      setSearchedColumn(dataIndex) 
    
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('')
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'displayName',
      width: '30%',
      key:'displayName',
      ...getColumnSearchProps('displayName'),
    },
    {
      title: 'Category',
      dataIndex: ['shopData','category'],
      key:'category'
    },
    {
      title: 'Fire Rate',
      dataIndex: ['weaponStats','fireRate'],
      key:'firerate'
      
      
      
    },
    {
      title: 'Cost',
      dataIndex: ['shopData','cost'],
      key:'cost'
      
    },
    {
      title: 'Appearance',
      dataIndex: 'displayIcon',
      width: '20%',
      key:'displayIcon',
      render:(text,row) => <img style={{height:'40px'}} alt="weapon" src={text}></img>
      
      
    },
  ];

  useEffect(() => {
    fetch('https://valorant-api.com/v1/weapons')
    .then(response => response.json())
    .then(data => 
      setWeapons(data.data),
      setLoading(false)
      
    )
  }, [])
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    
    <div>
      <Table rowKey={record => record.uuid} loading={loading} bordered={false} columns={columns} dataSource={weapons} onChange={onChange} />
    </div>
  );
}
