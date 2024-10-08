import Head from "next/head";
import * as React from "react";
import { TITLE_POSTFIX } from "src/common/constants/Constants";

interface Props {
  title: string;
}

const HeadTitle = ({ title }: Props) => <Head>
  <title>{title}{TITLE_POSTFIX}</title>
</Head>;

export default HeadTitle;
