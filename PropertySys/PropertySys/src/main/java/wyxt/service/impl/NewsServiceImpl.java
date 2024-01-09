package wyxt.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import wyxt.mapper.NewsMapper;
import wyxt.model.NewsInfo;
import wyxt.service.NewsService;

import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    NewsMapper newsMapper;
    public List<NewsInfo> SelectNewsAll()
    {
        return newsMapper.SelectNewsAll();
    }

    public List<NewsInfo> SelectNewsTopAll()
    {
        return newsMapper.SelectNewsTopAll();
    }

    public List<NewsInfo> SelectNewsWhereAll(String typename)
    {
        return newsMapper.SelectNewsWhereAll(typename);
    }
    //根据id 查询详情

    public NewsInfo SelectNewsById(Integer id)
    {
        return newsMapper.SelectNewsById(id);
    }




    //根据id删除数据

    public int DelNewsById(Integer id)
    {
        return newsMapper.DelNewsById(id);
    }

    //根据用户id 修改用户信息

    public int UpdateNewsById(NewsInfo newsInfo)
    {
        return newsMapper.UpdateNewsById(newsInfo);
    }

    //用户管理新增

    public int InsertNews(NewsInfo newsInfo)
    {
        return newsMapper.InsertNews(newsInfo);
    }
}
