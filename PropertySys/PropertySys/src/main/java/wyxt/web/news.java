package wyxt.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import wyxt.model.NewsInfo;
import wyxt.service.NewsService;

import java.util.List;

@Controller
public class news
{
    @Autowired
    NewsService newsService;


    @PostMapping("/api/SelectNewsAll")
    @ResponseBody
    public List<NewsInfo> SelectNewsAll()
    {
        return newsService.SelectNewsAll();
    }


    @PostMapping("/api/SelectNewsTopAll")
    @ResponseBody
    public List<NewsInfo> SelectNewsTopAll()
    {
        return newsService.SelectNewsTopAll();
    }

    //根据id 查询详情


    @PostMapping("/api/SelectNewsById")
    @ResponseBody
    public NewsInfo SelectNewsById(Integer id)
    {
        return newsService.SelectNewsById(id);
    }


    @PostMapping("/api/SelectNewsWhereAll")
    @ResponseBody
    public List<NewsInfo> SelectNewsWhereAll(String typename)
    {
        return newsService.SelectNewsWhereAll(typename);
    }

    //根据id删除数据

    @PostMapping("/api/DelNewsById")
    @ResponseBody
    public int DelNewsById(Integer id)
    {
        return newsService.DelNewsById(id);
    }

    //根据用户id 修改用户信息

    @PostMapping("/api/UpdateNewsById")
    @ResponseBody
    public int UpdateNewsById(NewsInfo newsInfo)
    {
        return newsService.UpdateNewsById(newsInfo);
    }

    //用户管理新增

    @PostMapping("/api/InsertNews")
    @ResponseBody
    public int InsertNews(NewsInfo newsInfo)
    {
        return newsService.InsertNews(newsInfo);
    }
}
