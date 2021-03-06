// ResourceList
import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {formatMessage, FormattedMessage} from 'umi-plugin-react/locale';
import T from './../../utils/T';
import router from 'umi/router';
import {
    EnumQuickRegisterParams,
} from './../../constants/dataSync/EnumSyncConfigModal';
import {EnumDataSyncPageInfo} from './../../constants/EnumPageInfo';
import {EnumDataSourceStatus} from './../../constants/dataSync/EnumSyncCommon';
import {
    Row,
    Col,
    Card,
    Form,
    Input,
    Select,
    Icon,
    Button,
    Tooltip,
    InputNumber,
    DatePicker,
    Radio,
    Tree,
    Spin,
    Table,
    Modal,
    Popconfirm,
    TreeSelect,
    Collapse,
} from 'antd';

const {TreeNode, DirectoryTree} = Tree;
const {RangePicker} = DatePicker;
const FormItem = Form.Item;
const {TextArea} = Input;
const {Option} = Select;
const {Panel} = Collapse;

import styles from './CheckRecordList.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'; // @ 表示相对于源文件根目录


//数据分发页面
/* eslint react/no-multi-comp:0 */
@connect(({checkRecord, loading}) => ({
    checkRecord,
    // fetchTreeStatus: loading.effects['checkRecord/getDataResourceTreeAction'],
    fetchCheckRecordListStatus: loading.effects['checkRecord/fetchCheckRecordListAction'],
}))
// class CheckRecordList
@Form.create()
class CheckRecordList extends PureComponent {

    state = {
        currentPage: EnumDataSyncPageInfo.defaultPage,//分页
        selectRows: [], //选择的数据列
        selectedKey: 'GA',//树节点默认选中的值
        selectedArea: '烟台市',//树节点默认选中的地区名字，用来后台获取参数
        baseInfoSelect: [],     //被调查人基本情况
        bodyConditionSelect: [],     //身体状况
        treeData: [
            {
                children: [
                    {
                        id: "GA001",
                        key: "GA001",
                        name: "芝罘区",
                        pId: "GA",
                        title: "芝罘区",
                    },
                    {
                        id: "GA002",
                        key: "GA002",
                        name: "福山区",
                        pId: "GA",
                        title: "福山区",
                    },
                    {
                        id: "GA003",
                        key: "GA003",
                        name: "莱山区",
                        pId: "GA",
                        title: "莱山区",
                    },
                    {
                        id: "GA004",
                        key: "GA004",
                        name: "牟平区",
                        pId: "GA",
                        title: "牟平区",
                    },
                    {
                        id: "GA005",
                        key: "GA005",
                        name: "海阳市",
                        pId: "GA",
                        title: "海阳市",
                    },
                    {
                        id: "GA006",
                        key: "GA006",
                        name: "莱阳市",
                        pId: "GA",
                        title: "莱阳市",
                    },
                    {
                        id: "GA007",
                        key: "GA007",
                        name: "栖霞市",
                        pId: "GA",
                        title: "栖霞市",
                    },
                    {
                        id: "GA008",
                        key: "GA008",
                        name: "蓬莱市",
                        pId: "GA",
                        title: "蓬莱市",
                    },
                    {
                        id: "GA009",
                        key: "GA009",
                        name: "长岛县",
                        pId: "GA",
                        title: "长岛县",
                    },
                    {
                        id: "GA010",
                        key: "GA010",
                        name: "龙口市",
                        pId: "GA",
                        title: "龙口市",
                    },
                    {
                        id: "GA011",
                        key: "GA011",
                        name: "招远市",
                        pId: "GA",
                        title: "招远市",
                    },
                    {
                        id: "GA012",
                        key: "GA012",
                        name: "莱州市",
                        pId: "GA",
                        title: "莱州市",
                    },
                    {
                        id: "GA013",
                        key: "GA013",
                        name: "开发区",
                        pId: "GA",
                        title: "开发区",
                    },
                    {
                        id: "GA014",
                        key: "GA014",
                        name: "高新区",
                        pId: "GA",
                        title: "高新区",
                    },
                    {
                        id: "GA015",
                        key: "GA015",
                        name: "保税港区",
                        pId: "GA",
                        title: "保税港区",
                    },
                    {
                        id: "GA016",
                        key: "GA016",
                        name: "昆嵛山保护区",
                        pId: "GA",
                        title: "昆嵛山保护区",
                    },
                ],
                id: "GA",
                key: "GA",
                name: "烟台市",
                pId: "0",
                title: "烟台市",
            }
        ],
        total: 0,
        members: [],
        fakeData: {
            "total": 11,
            "pages": null,
            "members": [
                {
                    "id": 2456,
                    "area": "莱阳市",
                    "name": "柳爱玲",
                    "address": "古柳街道柳沟村",
                    "idCard": "370682198711291121",
                    "phoneNum": "13361324284",
                    "age": 34,
                    "gender": "女",
                    "nativePlace": "山东莱阳",
                    "baseInfo": "外地来烟",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 1049,
                    "fillUserName": "梁帅帅"
                },
                {
                    "id": 2455,
                    "area": "莱阳市",
                    "name": "柳爱玲",
                    "address": "古柳街道柳沟村",
                    "idCard": "370682198711291121",
                    "phoneNum": "13361324284",
                    "age": 34,
                    "gender": "女",
                    "nativePlace": "山东莱阳",
                    "baseInfo": "外地来烟",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 1049,
                    "fillUserName": "梁帅帅"
                },
                {
                    "id": 2454,
                    "area": "莱阳市",
                    "name": "陈国宏",
                    "address": "山东省莱阳市城厢街道办事处盛世广场",
                    "idCard": "532401197507052017",
                    "phoneNum": "15106588986",
                    "age": 45,
                    "gender": "男",
                    "nativePlace": "云南省玉溪市",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 366,
                    "fillUserName": "王骏"
                },
                {
                    "id": 2453,
                    "area": "莱阳市",
                    "name": "董常云",
                    "address": "莱阳市龙旺庄街道田格庄村",
                    "idCard": "370682198808153526",
                    "phoneNum": "13553129100",
                    "age": 32,
                    "gender": "男",
                    "nativePlace": "",
                    "baseInfo": "外地来烟",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 1094,
                    "fillUserName": "崔雪梅"
                },
                {
                    "id": 2452,
                    "area": "莱州市",
                    "name": "周艳磊",
                    "address": "莱州市前北流村",
                    "idCard": "370625197607210027",
                    "phoneNum": "13953588225",
                    "age": 44,
                    "gender": "女",
                    "nativePlace": "",
                    "baseInfo": "已被居家隔离",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 1091,
                    "fillUserName": "宋琳"
                },
                {
                    "id": 2451,
                    "area": "海阳市",
                    "name": "辛德泽",
                    "address": "大辛家",
                    "idCard": "370629195308050672",
                    "phoneNum": "3682200",
                    "age": null,
                    "gender": "男",
                    "nativePlace": "",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 848,
                    "fillUserName": "辛浩"
                },
                {
                    "id": 2450,
                    "area": "龙口市",
                    "name": "李腾",
                    "address": "龙口市针织厂小区",
                    "idCard": "370681199810062218",
                    "phoneNum": "17852357218",
                    "age": 23,
                    "gender": "男",
                    "nativePlace": "山东省烟台市龙口市",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:33",
                    "fillUserId": 1093,
                    "fillUserName": "李腾"
                },
                {
                    "id": 2449,
                    "area": "莱州市",
                    "name": "石潇丹",
                    "address": "莱州市永安街道花园北流082号",
                    "idCard": "370683198905242244",
                    "phoneNum": "15376590967",
                    "age": 31,
                    "gender": "女",
                    "nativePlace": "莱州市永安街道花园北流082号",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:33",
                    "fillUserId": 405,
                    "fillUserName": "张莲"
                },
                {
                    "id": 2448,
                    "area": "栖霞市",
                    "name": "路亚楠",
                    "address": "烟台市芝罘区信达小区",
                    "idCard": "370686199211138227",
                    "phoneNum": "15166862381",
                    "age": 28,
                    "gender": "女",
                    "nativePlace": "山东省栖霞市松山街道北路家沟村",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:33",
                    "fillUserId": 1096,
                    "fillUserName": "路亚楠"
                },
                {
                    "id": 2447,
                    "area": "莱州市",
                    "name": "孙修",
                    "address": "莱州市安邦名人家园1号楼3单元1301室",
                    "idCard": "371323198905078411",
                    "phoneNum": "18364458532",
                    "age": 31,
                    "gender": "男",
                    "nativePlace": "临沂沂水",
                    "baseInfo": "外出返烟",
                    "createTime": "2020-02-10 17:33",
                    "fillUserId": 406,
                    "fillUserName": "潘羽敏"
                }
            ],
            "activities": null,
            "touchs": null,
            "currnets": null
        },
        tableData: [
            {
                key: 1,
                address: '县市区',
                name: '姓名',
                age: 18,
                sex: '性别',
                createDate: '创建时间',
                pId: '123456787',
                status: '基本状况',
            },

        ],
        visible: false,
        startPageNum: '',
        endPageNum: '',
        maxPageSize: 9999,
    };

    componentDidMount() {
        const {dispatch} = this.props;
        let self = this;

        //获取被调查人基本情况
        new Promise((resolve, reject) => {
            dispatch({
                type: 'checkRecord/fetchSelectInfoAction',
                params: {
                    type: 'BASE_INFO'
                },
                resolve,
                reject,
            });
        }).then(response => {
            if (response.code === 0) {
                response.data.unshift({
                    name: "全部",
                    value: "全部"
                });
                self.setState({
                    baseInfoSelect: response.data
                })
            } else {
                T.prompt.error(response.msg);
            }
        });

        //获取身体情况列表
        new Promise((resolve, reject) => {
            dispatch({
                type: 'checkRecord/fetchSelectInfoAction',
                params: {
                    type: 'BODY_CONDITION'
                },
                resolve,
                reject,
            });
        }).then(response => {
            if (response.code === 0) {
                response.data.unshift({
                    name: "全部",
                    value: "全部"
                });
                self.setState({
                    bodyConditionSelect: response.data
                });
            } else {
                T.prompt.error(response.msg);
            }
        });
        this.fetchDataList();
    }

    //获取当前页数数据
    fetchDataList = () => {
        const {dispatch, form, checkRecord} = this.props;
        const {currentPage, selectedKey, treeData, selectedArea} = this.state;
        let self = this;

        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                //地区分类
                let categoryCode = '';
                treeData.map(val => {
                    if (values.resourceType === val.name) {
                        categoryCode = val.id;
                    }
                });
                let loginInfo = T.auth.getLoginInfo();

                let params = {
                    current: currentPage,
                    size: EnumDataSyncPageInfo.defaultPageSize,
                    startTime: T.lodash.isUndefined(values.startDate) ? '' : T.helper.dateFormat(values.startDate,'YYYY-MM-DD'),      //开始时间
                    endTime: T.lodash.isUndefined(values.endDate) ? '' : T.helper.dateFormat(values.endDate,'YYYY-MM-DD'),        //结束时间
                    area: T.auth.isAdmin() ? selectedArea === "烟台市" ? '' : selectedArea : loginInfo.data.area,           //县市区(烟台市传空)
                    name: T.lodash.isUndefined(values.person) ? '' : values.person,           //被调查人姓名
                    gender: T.lodash.isUndefined(values.sex) ? '' : values.sex === 'all' ? '' : values.sex,         //性别
                    // idCard: "",         //身份证号
                    baseInfo: T.lodash.isUndefined(values.base) ? '' : values.base === '全部' ? '' : values.base,         //被调查人基本情况
                    bodyCondition: T.lodash.isUndefined(values.status) ? '' : values.status === '全部' ? '' : values.status,         //身体状况
                    fillUserName: T.lodash.isUndefined(values.head) ? '' : values.head,   //摸排人
                    fillUserId: loginInfo.data.static_auth === 0 ? loginInfo.data.id : ''   //摸排人id
                };
                new Promise((resolve, reject) => {
                    dispatch({
                        type: 'checkRecord/fetchCheckRecordListAction',
                        params,
                        resolve,
                        reject,
                    });
                }).then(response => {
                    if (response.code === 0) {
                        const { total, members } = response.data;
                        let endData = members.map( (val,idx) => {
                            return {
                                ...val,
                                key: (currentPage-1) * 10 + idx + 1,
                                index: (currentPage-1) * 10 + idx + 1,
                            }
                        });
                        self.setState({
                            total,
                            members: endData,
                        })
                    } else {
                        T.prompt.error(response.msg);
                    }
                });
            }
        });

    };

    //重置表单
    resetDataSource = () => {
        this.props.form.resetFields();
        this.fetchDataList();
    };

    //树选择
    onSelect = (keys, event) => {
        //点击选中事件，属性可以打印查看
        const eventData = event.node.props;
        // this.props.form.setFieldsValue({
        //     resourceType: eventData.name
        // });
        let self = this;
        this.setState({
            selectedKey: keys[0],
            selectedArea: eventData.name
        }, () => {
            self.fetchDataList()
        });
    };

    //渲染树节点
    renderTreeNodes = data => {
        return data.map(item => {
            if (item.children) {
                return (
                    <TreeNode {...item} dataRef={item} title={item.name} key={item.id}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} dataRef={item} title={item.name} key={item.id} isLeaf/>;
        });
    };

    //渲染select树节点
    renderSelectTreeNodes = data => {
        return data.map(item => {
            if (item.children) {
                return (
                    <TreeSelect.TreeNode {...item} dataRef={item} title={item.name} value={item.name} key={item.id}>
                        {this.renderSelectTreeNodes(item.children)}
                    </TreeSelect.TreeNode>
                );
            }
            return <TreeSelect.TreeNode {...item} dataRef={item} title={item.name} value={item.name} key={item.id}
                                        isLeaf/>;
        });
    };

    //查询
    searchDataSource = (e) => {
        const {dispatch, form} = this.props;
        e.preventDefault();
        this.setState({
            currentPage: EnumDataSyncPageInfo.defaultPage,
        }, () => {
            this.fetchDataList();
        });
        // this.fetchDataList();
    };

    //页码变换
    pageChange = page => {
        this.setState({
            currentPage: page,
        }, () => {
            this.fetchDataList();
        });
    };

    //导出
    exportData = () => {
        this.setState({
            visible: true,
        });
    };

    //查看详情
    showMetadataManage = (e, key) => {
        router.push({
            pathname: '/checkRecord/showDetail',
            params: {
                isRouterPush: true,
                data: key
            },
        });
    };

    //树选择
    onTreeChange = (e, node) => {
        this.setState({
            selectedKey: node.props.id,
        });
    };

    handleOk = e => {
        const {
            total,
            startPageNum,
            endPageNum,
            maxPageSize
        } = this.state;
        // this.setState({
        //     visible: false,
        // });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
            startPageNum: '',
            endPageNum: '',
        });
    };

    onStartPageChange = (e) => {
        let r = /^\+?[1-9][0-9]*$/;
        if(!r.test(e.target.value)) {
            T.prompt.error("请输入大于0的数字");
            this.setState({
                startPageNum: ''
            })
        }else {
            this.setState({
                startPageNum: e.target.value === '' ? e.target.value : Number(e.target.value)
            })
        }
        // const {
        //     total,
        //     endPageNum,
        //     maxPageSize
        // } = this.state;
        // // console.log(e.target.value,'onStartPageChange');
        // // console.log(Number(e.target.value),'Number(e.target.value)')
        // let currentNum = Number(e.target.value);
        // let startNum;
        // // let startNum = Number(e.target.value) >= total ? total : Number(e.target.value);
        // // if(currentNum >= total){
        // //     startNum = total;
        // // }else if ((endPageNum - maxPageSize) > currentNum ){
        // //     startNum = endPageNum - maxPageSize;
        // // }else {
        // //     startNum = currentNum;
        // // }
        //
        // if(currentNum >= total){
        //     startNum = total;
        // }else {
        //     startNum = currentNum;
        // }
        // this.setState({
        //     startPageNum: startNum
        // })
    };

    onStartPageCheck = (e) => {
        const {
            total,
            startPageNum,
            endPageNum,
            maxPageSize
        } = this.state;
        let currentNum = Number(startPageNum);
        this.setState({
            // endPageNum: currentNum > 0 ? currentNum > (currentNum + maxPageSize) ? (currentNum + maxPageSize) : total : ''
            endPageNum: currentNum > 0 ? (currentNum + maxPageSize) > total ? total : (currentNum + maxPageSize) : '',
            startPageNum: currentNum > total ?  total : currentNum
        })
        // console.log(currentNum,'currentNum');
        // let startNum;
        // if(currentNum <= 0){
        //     endNum = '';
        // }else if(currentNum <= startPageNum && currentNum > 0){
        //     endNum = startPageNum;
        // }else if(currentNum > startPageNum && currentNum < (maxPageSize + startPageNum) && (maxPageSize + startPageNum) <= total){
        //     endNum = currentNum;
        // }else if(currentNum > startPageNum && currentNum < (maxPageSize + startPageNum) && currentNum < total && (maxPageSize + startPageNum) > total){
        //     endNum = currentNum;
        // }else if(currentNum > startPageNum && currentNum < (maxPageSize + startPageNum) && currentNum < total && (maxPageSize + startPageNum) < total){
        //     endNum = currentNum;
        // }else if(currentNum > startPageNum && currentNum > (maxPageSize + startPageNum) && currentNum > total && (maxPageSize + startPageNum) > total){
        //     endNum = total;
        // }else if(currentNum > startPageNum && currentNum > (maxPageSize + startPageNum) && currentNum > total && (maxPageSize + startPageNum) < total){
        //     endNum = maxPageSize + startPageNum;
        // }
        // // else if(currentNum >= (maxPageSize + startPageNum)){
        // //     endNum = maxPageSize + startPageNum;
        // // }else if(currentNum > total && (maxPageSize + startPageNum) > total){
        // //     endNum = total;
        // // }else {
        // //     endNum = currentNum;
        // // }
        // this.setState({
        //     endPageNum: endNum
        // })
    };

    onEndPageChange = (e) => {
        const {
            total,
            startPageNum,
            maxPageSize
        } = this.state;
        let currentNum = Number(e.target.value);
        let endNum;

        let r = /^\+?[1-9][0-9]*$/;
        if(!r.test(e.target.value)) {
            T.prompt.error("请输入大于0的数字");
            this.setState({
                endPageNum: ''
            })
        }else {
            this.setState({
                endPageNum: e.target.value === '' ? e.target.value : Number(e.target.value)
            })
        }
        // if(currentNum >= total){
        //     endNum = total;
        // }else if (currentNum <= 0){
        //     endNum = '';
        // } else if (currentNum > 0 && currentNum < startPageNum){
        //     endNum = startPageNum;
        // } else {
        //     if(currentNum > (startPageNum + maxPageSize)) {
        //         endNum = startPageNum + maxPageSize;
        //     }else {
        //         endNum = currentNum;
        //     }
        // }
        // //如果为空
        // if(currentNum === ''){
        //     endNum = currentNum
        // }else {
        //     endNum = Number(currentNum)
        // }

    };

    onEndPageCheck = (e) => {
        const {
            total,
            startPageNum,
            endPageNum,
            maxPageSize
        } = this.state;
        let currentNum = Number(endPageNum);
        // console.log(currentNum,'currentNum');
        let endNum;
        // if(currentNum <= 0){
        //     endNum = '';
        // }else if(currentNum <= startPageNum && currentNum > 0){
        //     endNum = startPageNum;
        // }else if(currentNum > startPageNum && currentNum < (maxPageSize + startPageNum) && (maxPageSize + startPageNum) <= total){
        //     endNum = currentNum;
        // }else if(currentNum > startPageNum && currentNum <= (maxPageSize + startPageNum) && currentNum <= total && (maxPageSize + startPageNum) > total){
        //     endNum = currentNum;
        // }else if(currentNum > startPageNum && currentNum <= (maxPageSize + startPageNum) && currentNum <= total && (maxPageSize + startPageNum) < total){
        //     endNum = currentNum;
        // }else if(currentNum > startPageNum && currentNum > (maxPageSize + startPageNum) && currentNum > total && (maxPageSize + startPageNum) > total){
        //     endNum = total;
        // }else if(currentNum > startPageNum && currentNum > (maxPageSize + startPageNum) && currentNum > total && (maxPageSize + startPageNum) < total){
        //     endNum = maxPageSize + startPageNum;
        // }

        if(currentNum <= 0){
            endNum = '';
        }else {
            if(currentNum <= startPageNum){
                endNum = startPageNum;
            }else {
                if((maxPageSize + startPageNum)  <= total){
                    if(currentNum <= (maxPageSize + startPageNum)){
                        endNum = currentNum
                    }else {
                        endNum = maxPageSize + startPageNum
                    }
                }else {
                    if(currentNum <= total){
                        endNum = currentNum
                    }else {
                        endNum = total
                    }
                }
            }
        }
        // console.log(endNum,'endNum');

        // else if(currentNum >= (maxPageSize + startPageNum)){
        //     endNum = maxPageSize + startPageNum;
        // }else if(currentNum > total && (maxPageSize + startPageNum) > total){
        //     endNum = total;
        // }else {
        //     endNum = currentNum;
        // }
        this.setState({
            endPageNum: endNum
        })
    };

    sendParams = () => {
        const {
            form: {getFieldsValue},
        } = this.props;
        const {
            selectedArea,
            startPageNum,
            endPageNum,
            maxPageSize,
        } = this.state;

        let loginInfo = T.auth.getLoginInfo();
        let formTimeValue = getFieldsValue();

        let formStartTime = T.lodash.isUndefined(formTimeValue.startDate) ? '' : T.helper.dateFormat(formTimeValue.startDate,'YYYY-MM-DD');
        let formEndTime = T.lodash.isUndefined(formTimeValue.endDate) ? '' : T.helper.dateFormat(formTimeValue.endDate,'YYYY-MM-DD');
        let formArea = T.auth.isAdmin() ? selectedArea === "烟台市" ? '' : selectedArea : loginInfo.data.area;
        let formName = T.lodash.isUndefined(formTimeValue.person) ? '' : formTimeValue.person;
        let formGender = T.lodash.isUndefined(formTimeValue.sex) ? '' : formTimeValue.sex === 'all' ? '' : formTimeValue.sex;
        let formBaseInfo = T.lodash.isUndefined(formTimeValue.base) ? '' : formTimeValue.base === '全部' ? '' : formTimeValue.base;
        // let formIdCard = '';
        let formBodyCondition = T.lodash.isUndefined(formTimeValue.status) ? '' : formTimeValue.status === '全部' ? '' : formTimeValue.status;
        let formFillUserId = loginInfo.data.static_auth === 0 ? loginInfo.data.id : '';
        let formFillUserName = T.lodash.isUndefined(formTimeValue.head) ? '' : formTimeValue.head;
        let formCurrent = startPageNum;
        let formSize = endPageNum;

        // let apiHref = `${window.ENV.apiDomain}` + "/excel/memberDetail?startTime=" + formStartTime + '&endTime=' + formEndTime + '&area=' + formArea + '';
        let apiHref = `${window.ENV.apiDomain}/excel/memberDetail?startTime=${formStartTime}&endTime=${formEndTime}&area=${formArea}&name=${formName}&gender=${formGender}&baseInfo=${formBaseInfo}&bodyCondition=${formBodyCondition}&fillUserId=${formFillUserId}&fillUserName=${formFillUserName}&current=${formCurrent}&size=${formSize}`;
        if(endPageNum === '' || startPageNum === ''){
            T.prompt.error('起始条数和结束条数不能为空！')
        }else {
            const w=window.open('about:blank');
            w.location.href = apiHref;
        }
    };

    //渲染不同的下拉框
    renderSelect = (dataSource) => {
        return (
            dataSource.map((item,idx) => {
                return (
                    <Option key={item.value} value={item.name}>
                        {item.name}
                    </Option>
                )
            })
        )
    };

    render() {
        const {
            fetchTreeStatus,
            fetchCheckRecordListStatus,
            savingStatus,
            testStatus,
            metadataManage,
            form: {getFieldDecorator, getFieldValue, getFieldsValue},
        } = this.props;
        // const {dataResourceLists, dataResourceTypeTreeList, dataSourceTypeTreeOldData} = metadataManage;
        const {
            treeData,
            members,
            tableData,
            total,
            selectedArea,
            currentPage,
            selectedKey,
            bodyConditionSelect,
            baseInfoSelect,
            startPageNum,
            endPageNum,
            maxPageSize,
        } = this.state;
        // console.log(Number(startPageNum),'startPageNum');

        let loginInfo = T.auth.getLoginInfo();
        let formTimeValue = getFieldsValue();
        // let params = {
        //     current: currentPage,
        //     size: EnumDataSyncPageInfo.defaultPageSize,
        //     startTime: T.lodash.isUndefined(values.startDate) ? '' : T.helper.dateFormat(values.startDate,'YYYY-MM-DD'),      //开始时间
        //     endTime: T.lodash.isUndefined(values.endDate) ? '' : T.helper.dateFormat(values.endDate,'YYYY-MM-DD'),        //结束时间
        //     area: T.auth.isAdmin() ? selectedArea === "烟台市" ? '' : selectedArea : loginInfo.data.area,           //县市区(烟台市传空)
        //     name: T.lodash.isUndefined(values.person) ? '' : values.person,           //被调查人姓名
        //     gender: T.lodash.isUndefined(values.sex) ? '' : values.sex === 'all' ? '' : values.sex,         //性别
        //     // idCard: "",         //身份证号
        //     baseInfo: T.lodash.isUndefined(values.base) ? '' : values.base === '全部' ? '' : values.base,         //被调查人基本情况
        //     bodyCondition: T.lodash.isUndefined(values.status) ? '' : values.status === '全部' ? '' : values.status,         //身体状况
        //     fillUserName: T.lodash.isUndefined(values.head) ? '' : values.head,   //摸排人
        //     fillUserId: loginInfo.data.static_auth === 0 ? loginInfo.data.id : ''   //摸排人id
        // };

        let formStartTime = T.lodash.isUndefined(formTimeValue.startDate) ? '' : T.helper.dateFormat(formTimeValue.startDate,'YYYY-MM-DD');
        let formEndTime = T.lodash.isUndefined(formTimeValue.endDate) ? '' : T.helper.dateFormat(formTimeValue.endDate,'YYYY-MM-DD');
        let formArea = T.auth.isAdmin() ? selectedArea === "烟台市" ? '' : selectedArea : loginInfo.data.area;
        let formName = T.lodash.isUndefined(formTimeValue.person) ? '' : formTimeValue.person;
        let formGender = T.lodash.isUndefined(formTimeValue.sex) ? '' : formTimeValue.sex === 'all' ? '' : formTimeValue.sex;
        let formBaseInfo = T.lodash.isUndefined(formTimeValue.base) ? '' : formTimeValue.base === '全部' ? '' : formTimeValue.base;
        // let formIdCard = '';
        let formBodyCondition = T.lodash.isUndefined(formTimeValue.status) ? '' : formTimeValue.status === '全部' ? '' : formTimeValue.status;
        let formFillUserId = loginInfo.data.static_auth === 0 ? loginInfo.data.id : '';
        let formFillUserName = T.lodash.isUndefined(formTimeValue.head) ? '' : formTimeValue.head;
        let formCurrent = startPageNum;
        let formSize = endPageNum;

        // let apiHref = `${window.ENV.apiDomain}` + "/excel/memberDetail?startTime=" + formStartTime + '&endTime=' + formEndTime + '&area=' + formArea + '';
        let apiHref = `${window.ENV.apiDomain}/excel/memberDetail?startTime=${formStartTime}&endTime=${formEndTime}&area=${formArea}&name=${formName}&gender=${formGender}&baseInfo=${formBaseInfo}&bodyCondition=${formBodyCondition}&fillUserId=${formFillUserId}&fillUserName=${formFillUserName}&current=${formCurrent}&size=${formSize}`;

        const columns = [
            {
                title: '序号',
                dataIndex: 'index',
                key: 'index',
            },
            {
                title: '县市区',
                dataIndex: 'area',
                key: 'area',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '性别',
                dataIndex: 'gender',
                key: 'gender',
            },
            {
                title: '填报日期',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '身份证号',
                dataIndex: 'idCard',
                key: 'idCard',
            },

            {
                title: '被调查人基本情况',
                dataIndex: 'baseInfo',
                key: 'baseInfo',
            },
            // {
            //     title: '身体状况',
            //     dataIndex: 'status',
            //     key: 'status',
            // },
            {
                title: '摸排人',
                dataIndex: 'fillUserName',
                key: 'fillUserName',
            },
            {
                title: '操作',
                key: 'action',
                // width: '15%',
                render: (text, record) => {
                    return (
                        <span><a onClick={e => this.showMetadataManage(e, record)}>查看详情</a></span>
                    );
                },
            }
        ];
        const rowSelection = {
            //多选所选择的key值
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectRows: selectedRows
                })
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
            <PageHeaderWrapper title="摸排记录查询">
                <Row gutter={24}>
                    {
                        T.auth.isAdmin() ?
                            <Col xl={4} lg={4} md={4} sm={24} xs={24}>
                                <Card
                                    title="资源列表"
                                    bordered={false}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    {
                                        fetchTreeStatus ? <Spin/> :
                                            <DirectoryTree
                                                multiple
                                                defaultExpandAll={true}
                                                onSelect={this.onSelect.bind(this)}
                                                selectedKeys={[selectedKey]}
                                            >
                                                {this.renderTreeNodes(treeData)}
                                            </DirectoryTree>
                                    }
                                </Card>
                            </Col>
                            :
                            null
                    }
                    <Col xl={T.auth.isAdmin() ? 20: 24} lg={T.auth.isAdmin() ? 20: 24} md={T.auth.isAdmin() ? 20: 24} sm={24} xs={24} className={styles.dataSourceTableList}>
                        <Form layout="inline" onSubmit={this.searchDataSource}>
                            <Row className={`${styles.dataSourceTitle} ${styles.tableListForms}`}
                                 style={{marginBottom: 10}}>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label={<FormattedMessage
                                            id="checkRecord.resourceList.person.label"/>}
                                    >
                                        {getFieldDecorator('person', {})(
                                            <Input
                                                autoComplete="off"
                                                placeholder={formatMessage({
                                                    id: 'checkRecord.resourceList.person.placeholder',
                                                })}
                                            />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24} style={{textAlign: 'left'}}>
                                    <Form.Item
                                        label={<FormattedMessage
                                            id="checkRecord.resourceList.sex.label"/>}
                                    >
                                        {getFieldDecorator('sex', {
                                            initialValue: "all",
                                        })(
                                            <Radio.Group onChange={this.onChange}>
                                                <Radio value={"男"}>男</Radio>
                                                <Radio value={"女"}>女</Radio>
                                                <Radio value={"all"}>全部</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label={<FormattedMessage
                                            id="checkRecord.resourceList.startDate.label"/>}
                                    >
                                        {getFieldDecorator('startDate', {
                                            // rules: [{required: true, message: '请选择开始时间！'}],
                                            // initialValue: T.moment(new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime()),
                                        })(
                                            <DatePicker/>
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label={<FormattedMessage
                                            id="checkRecord.resourceList.endDate.label"/>}
                                    >
                                        {getFieldDecorator('endDate', {
                                            // rules: [{required: true, message: '请选择结束时间！'}],
                                            // initialValue: T.moment(new Date().getTime()),
                                        })(
                                            <DatePicker/>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row className={`${styles.dataSourceTitle} ${styles.tableListForms}`}
                                 style={{marginBottom: 10}}>

                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label={<FormattedMessage
                                            id="checkRecord.resourceList.base.label"/>}
                                    >
                                        {getFieldDecorator('base',{
                                            initialValue: "全部"
                                        })(
                                            <Select
                                                getPopupContainer={triggerNode => triggerNode.parentNode}
                                            >
                                                {
                                                    this.renderSelect(baseInfoSelect)
                                                }
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label={<FormattedMessage
                                            id="checkRecord.resourceList.status.label"/>}
                                    >
                                        {getFieldDecorator('status',{
                                            initialValue: "全部"
                                        })(
                                            <Select
                                                getPopupContainer={triggerNode => triggerNode.parentNode}
                                            >
                                                {
                                                    this.renderSelect(bodyConditionSelect)
                                                }
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label={<FormattedMessage
                                            id="checkRecord.resourceList.head.label"/>}
                                    >
                                        {getFieldDecorator('head', {})(
                                            <Input
                                                autoComplete="off"
                                                placeholder={formatMessage({
                                                    id: 'checkRecord.resourceList.head.placeholder',
                                                })}
                                            />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={8} md={8} sm={8} xs={24} style={{textAlign: 'left'}}>
                                    <Form.Item className={styles.searchBtnWrapper}>
                                        <Button htmlType="submit" style={{marginRight: 10}}>
                                            <FormattedMessage id="checkRecord.btn.search"/>
                                        </Button>
                                        <Button onClick={this.resetDataSource} type="primary" style={{marginRight: 10}}>
                                            <FormattedMessage id="checkRecord.btn.reset"/>
                                        </Button>
                                        <Button onClick={this.exportData} type="primary">
                                            <FormattedMessage id="checkRecord.btn.output"/>
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                        <Row className={`${styles.dataSourceTitle} ${styles.tableListForms}`}
                             style={{marginBottom: 10}}>
                            检索结果：{total}
                        </Row>
                        <Row>
                            <Card bordered={false}>
                                <Table
                                    columns={columns}
                                    dataSource={members}
                                    rowSelection={rowSelection}
                                    loading={fetchCheckRecordListStatus}
                                    pagination={{
                                        current: currentPage,
                                        onChange: this.pageChange,
                                        pageSize: EnumDataSyncPageInfo.defaultPageSize,
                                        total: Number(total) + 1,
                                        showQuickJumper: true
                                    }}
                                    // rowClassName={record => (record.editable ? styles.editable : '')}
                                />
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <Modal
                    title="导出功能"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.sendParams}>
                            确定
                        </Button>
                    ]}
                >
                    <div style={{fontWeight: 'bold'}}>
                        每次最多导出{maxPageSize + 1}条
                    </div>
                    <div style={{marginTop: 10}}>
                        起始条数：<Input placeholder="请输入起始条数" value={startPageNum} allowClear onChange={this.onStartPageChange} onBlur={this.onStartPageCheck}/>
                    </div>
                    <div style={{marginTop: 10}}>
                        结束条数：<Input placeholder="请输入结束条数" value={endPageNum} allowClear onChange={this.onEndPageChange} onBlur={this.onEndPageCheck}/>
                    </div>
                </Modal>
            </PageHeaderWrapper>
        );
    }
}

export default CheckRecordList;
