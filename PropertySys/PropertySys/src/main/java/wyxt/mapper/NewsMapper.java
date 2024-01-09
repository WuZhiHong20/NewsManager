package wyxt.mapper;

import org.apache.ibatis.annotations.*;
import wyxt.model.NewsInfo;
import wyxt.model.OwnerInfo;

import java.util.List;

@Mapper
public interface NewsMapper
{
    //查询所有
    @Select("select * from news ")
    List<NewsInfo> SelectNewsAll();


    @Select("SELECT * FROM news ORDER BY id DESC LIMIT 5")
    List<NewsInfo> SelectNewsTopAll();

    //根据id 查询详情
    @Select("select * from news where id=#{id}")
    NewsInfo SelectNewsById(@Param("id") Integer id);

    @Select("SELECT * FROM news where typename=#{typename}")
    List<NewsInfo> SelectNewsWhereAll(@Param("typename") String typename);


    //根据id删除数据
    @Delete("delete from news where id=#{id}")
    int DelNewsById(@Param("id") Integer id);

    //根据用户id 修改用户信息
    @Update("update news set title=#{title},typename=#{typename},photo=#{photo},introduction=#{introduction},descript=#{descript},author=#{author} where id=#{id}")
    int UpdateNewsById(NewsInfo newsInfo);

    //用户管理新增
    @Insert("insert into news(title,typename,photo,introduction,descript,author,addtime) values (#{title},#{typename},#{photo},#{introduction},#{descript},#{author},#{addtime})")
    int InsertNews(NewsInfo newsInfo);
}
