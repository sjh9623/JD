const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect"); //环境
const sourcemaps = require("gulp-sourcemaps"); //sass压缩 修改

// 开启环境
gulp.task(
  "server",
  (
    done
  ) => {
    connect.server(
      {
        port: 5050,
        root:
          "dist",
        livereload: true,
      }
    );

    done();
  }
);
//  复制hml
gulp.task(
  "copyHtml",
  (
    done
  ) => {
    gulp
      .src(
        "./html/*.html"
      )
      .pipe(
        gulp.dest(
          "dist/html"
        )
      )
      .pipe(
        connect.reload()
      );

    done();
  }
);
// 复制图片
gulp.task(
  "copyImg",
  (
    done
  ) => {
    gulp
      .src(
        "./img/**"
      )
      .pipe(
        gulp.dest(
          "dist/img"
        )
      )
      .pipe(
        connect.reload()
      );

    done();
  }
);
//   复制data
gulp.task(
  "copydata",
  (
    done
  ) => {
    gulp
      .src(
        "./data/*.json"
      )
      .pipe(
        gulp.dest(
          "dist/data"
        )
      )
      .pipe(
        connect.reload()
      );

    done();
  }
);
//   复制js
gulp.task(
  "copyJs",
  (
    done
  ) => {
    gulp
      .src(
        "./js/*.js"
      )
      .pipe(
        gulp.dest(
          "dist/js"
        )
      )
      .pipe(
        connect.reload()
      );

    done();
  }
);
// 复制css
gulp.task(
  "copyCss",
  (
    done
  ) => {
    gulp
      .src(
        "./css/*.css"
      )
      .pipe(
        gulp.dest(
          "dist/css"
        )
      )
      .pipe(
        connect.reload()
      );

    done();
  }
);

// 复制sass
gulp.task(
  "sass",
  (
    done
  ) => {
    gulp
      .src(
        "./sass/*.scss"
      )
      .pipe(
        sourcemaps.init()
      )
      //nested
      //expanded
      //compact
      //compressed
      .pipe(
        sass(
          {
            outputStyle:
              "compressed",
          }
        )
      )
      .pipe(
        sourcemaps.write()
      )
      .pipe(
        gulp.dest(
          "dist/css"
        )
      );

    done();
  }
);

//监听
gulp.task(
  "watch",
  (
    done
  ) => {
    gulp.watch(
      "./sass/*.scss",
      gulp.series(
        "sass"
      )
    );
    gulp.watch(
      "./html/*.html",
      gulp.series(
        "copyHtml"
      )
    );
    gulp.watch(
      "./img/**",
      gulp.series(
        "copyImg"
      )
    );
    gulp.watch(
      "./data/*.json",
      gulp.series(
        "copydata"
      )
    );
    gulp.watch(
      "./js/*.js",
      gulp.series(
        "copyJs"
      )
    );
    gulp.watch(
      "./css/*.css",
      gulp.series(
        "copyCss"
      )
    );
    done();
  }
);

//   同时执行  环境和监听
gulp.task(
  "default",
  gulp.series(
    "server",
    "watch"
  )
);
