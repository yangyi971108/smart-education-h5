import { request } from './request';

export const topicAPI = {
    getCompleteTopicByTopicName: (topicName: string) => {
        return request({
            url:
                'http://47.95.145.72:8083/topic/getCompleteTopicByTopicName',
            params: {
                topicName,
                hasFragment: 'emptyAssembleContent'
            },
        });
    },
};
