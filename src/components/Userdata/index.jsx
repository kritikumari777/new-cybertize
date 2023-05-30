import {Space, Table} from "antd";
import { useEffect, useState } from "react";
import { getUsers} from "../../API";
// import Link from "next/link";

function Userdata() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  

  return (
    <Space size={25} direction="vertical">
      <Table
      className=""
        loading={loading}
        columns={[
          {
            title: "Name",
            dataIndex: "firstName",
          },
          // {
          //   title: "LastName",
          //   dataIndex: "lastName",
          // },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },

          {
            title: "action",
            dataIndex: "address",
            render: (address) => {
              return (
                <div className="bg-[#0099FB] w-[88px] h-[27px] rounded-[5px] text-center">
                  <a href={"/users"}>View More</a>
                </div>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Userdata;
