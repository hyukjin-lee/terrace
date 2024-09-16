import * as React from "react";
import {Link} from "src/common/view/presentation/components/molecules";
import {formatDateTime} from "src/util";
import {DailyListResponse} from "../../../../../domain/DailyListResponse";
import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: "flex",
    fontSize: "1rem",
    fontFamily: "Noto Serif KR",
    fontWeight: 400,
    marginBottom: theme.spacing(2) // 글 사이의 간격 추가
  },
  // seq: {
  //   textAlign: "right",
  //   width: theme.spacing(4)
  // },
  date: {
    textAlign: "center",
    width: theme.spacing(12),
    flexShrink: 0, // 날짜 영역이 줄어들지 않도록 설정
    fontStyle: "italic" // 이탤릭체 적용
  },
  title: {
    flexGrow: 1, // 제목이 남은 공간을 모두 차지하도록 설정
    marginLeft: theme.spacing(2),
    whiteSpace: "nowrap", // 제목이 한 줄로 표시되도록 설정
    overflow: "hidden", // 넘치는 텍스트 숨김
    textOverflow: "ellipsis" // 넘치는 텍스트를 ...으로 표시
  }
}));

interface EachDailyContentProps {
  daily: DailyListResponse;
  userSelectNone?: boolean;
}

const EachDailyContent = ({ daily, userSelectNone }: EachDailyContentProps) => {
  const classes = useStyles();
  return <div className={classes.container} style={{ userSelect: userSelectNone ? "none" : "inherit" }}>
    {/* <div className={classes.seq}>{daily.seq}.</div> */}
    <div className={classes.date}>[{formatDateTime(daily.date, "YYYY.MM.DD")}]</div>
    <div className={classes.title}>{daily.title}</div>
  </div>;
};

interface Props {
  daily: DailyListResponse;
}

const EachDaily = ({ daily }: Props) => {
  return <Link href={daily.uri}>
    <EachDailyContent daily={daily} />
  </Link>;
};

export default EachDaily;
