package wyxt.service;

import org.apache.ibatis.annotations.*;
import wyxt.model.NewsInfo;

import java.util.List;

public interface NewsService
{

    List<NewsInfo> SelectNewsAll();


    List<NewsInfo> SelectNewsTopAll();
    //根据id 查询详情

    NewsInfo SelectNewsById(Integer id);



    List<NewsInfo> SelectNewsWhereAll(String typename);


    //根据id删除数据

    int DelNewsById(Integer id);

    //根据用户id 修改用户信息

    int UpdateNewsById(NewsInfo newsInfo);

    //用户管理新增

    int InsertNews(NewsInfo newsInfo);
}
