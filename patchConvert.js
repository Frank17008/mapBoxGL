const fs = require("fs");
const dirGeojson = "D:/geojson/"; // geojson文件目录
const dirPbf = "D:/mapBoxGL/PBF/"; // 生成切片的目录
fs.readdir(dirGeojson, function (err, files) {
	let res = "";
	files.forEach((item) => {
		// res += "tippecanoe -e " + dirPbf + item.split(".")[0] + " -pC -zg -f " + dirGeojson + item + ";";
		res += "tippecanoe -e " + dirPbf + item.split(".")[0] + " -R -Bg -pC -Z 0 -z 20 -f " + dirGeojson + item;
		// res += "tippecanoe -e " + dirPbf + " -l " + item.split(".")[0] + " -pC -Z10 -z18 -f " + dirGeojson + item + ";";
	});
	// 将生成切片命令写入文件
	fs.writeFile("./tippecanoe-command.txt", res, function () {
		console.info("ok");
	});
});

// tippecanoe -e [输出文件路径.pbf] [输入文件路径.json/.geojson] -z [切片最小层级] -Z [切片最大层级] -f -ps
// tippecanoe -e D:/mapBoxGL/PBF/BLDNUMPT D:/geojson/BLDNUMPT.json z20 -Z0 -f -ps;
// /-z zoom 或 --maximum-zoom=zoom:切片的最大级别（默认为14）
// -zg 或 --maximum-zoom=g: 根据数据的密集程度自动计算一个最大级别
// -Z zoom 或 --minimum-zoom=zoom: 切片的最小级别（默认0）
// -ae 或 --extend-zooms-if-still-dropping: 如果在大级别下瓦片仍然很大，它将自动增加最大级别，以使最大级别下没有要素被删除
// -R zoom/x/y 或 --one-tile=zoom/x/y:
// -s projection 或 --projection=projection: 给定输入文件的坐标系统。当前支持的坐标系有EPSG:4326（WGS84，默认值）、EPSG:3857（Web Mercator）。请尽量使用 WGS84 坐标系统的数据集。

// name.json 或 name.geojson：读取 GeoJSON 文件
// name.json.gz 或 name.geojson.gz：读取 GeoJSON 压缩文件
// name.geobuf：读取 Geobuf 文件
// name.csv：读取 CSV 文件
// -l name 或 --layer=name: 使用自定义图层名，而不是默认的输入文件名作为图层名，如果有多个输入文件，将合并为一个图层，除非使用-L选项来分别指定图层名。
// -L name:file.json 或 --named-layer=name:file.json：定义每个文件的对应的图层名
// -L{layer-json} 或 --named-layer={layer-json}: 通过 json 对象定义图层

// -n name 或 --name=name: 给瓦片集设置一个易读的名字
// -A text 或 --attribution=text： 瓦片集
// -N description 或 --description=description: 瓦片集描述

// -o file.mbtiles 或 --output=file.mbtiles：指定输出文件名
// -e directory 或 --output-to-directory=directory：指定输出文件路径
// -f 或 --force：若存在同名文件则删除
// -F 或 --allow-existing
